import React, { useEffect, useRef, useState } from 'react';
import { TableContainer, Table, TableHead, TableRow, TableHeader, TableBody, TableCell } from 'carbon-components-react';
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import Papa from 'papaparse';
import './Reports.css';

const Reports = () => {
  const [salesData, setSalesData] = useState([]);
  const [salesTableData, setSalesTableData] = useState([]);
  const chartRef = useRef(null);

  useEffect(() => {
    // Load and parse the CSV file
    Papa.parse('/salesData.csv', {
      download: true,
      header: true,
      complete: (results) => {
        const data = results.data;
        setSalesTableData(data);

        const transformedData = transformSalesData(data);
        setSalesData(transformedData);
      }
    });
  }, []);

  useEffect(() => {
    if (salesData.length > 0) {
      const root = am5.Root.new(chartRef.current);
      root.setThemes([am5themes_Animated.new(root)]);

      const chart = root.container.children.push(
        am5xy.XYChart.new(root, {
          panX: true,
          panY: true,
          wheelX: "panX",
          wheelY: "zoomX",
          pinchZoomX: true,
        })
      );

      const xAxis = chart.xAxes.push(
        am5xy.DateAxis.new(root, {
          maxDeviation: 0.2,
          baseInterval: {
            timeUnit: "day",
            count: 1,
          },
          renderer: am5xy.AxisRendererX.new(root, {
            minorGridEnabled: true
          }),
          tooltip: am5.Tooltip.new(root, {})
        })
      );

      const yAxis = chart.yAxes.push(
        am5xy.ValueAxis.new(root, {
          renderer: am5xy.AxisRendererY.new(root, {})
        })
      );

      const createSeries = (name, field) => {
        const series = chart.series.push(
          am5xy.LineSeries.new(root, {
            name: name,
            xAxis: xAxis,
            yAxis: yAxis,
            valueYField: field,
            valueXField: "date",
            legendValueText: "{valueY}",
            tooltip: am5.Tooltip.new(root, {
              pointerOrientation: "horizontal",
              labelText: "{valueY}"
            })
          })
        );

        series.data.setAll(salesData);

        series.appear(1000);
      };

      createSeries("Warehouse A", "warehouseA");
      createSeries("Warehouse B", "warehouseB");
      createSeries("Warehouse C", "warehouseC");

      const cursor = chart.set("cursor", am5xy.XYCursor.new(root, {
        behavior: "none"
      }));
      cursor.lineY.set("visible", false);

      const scrollbarX = chart.set("scrollbarX", am5.Scrollbar.new(root, {
        orientation: "horizontal"
      }));
      const scrollbarY = chart.set("scrollbarY", am5.Scrollbar.new(root, {
        orientation: "vertical"
      }));

      const legend = chart.rightAxesContainer.children.push(am5.Legend.new(root, {
        width: 200,
        paddingLeft: 15,
        height: am5.percent(100)
      }));

      legend.itemContainers.template.events.on("pointerover", function(e) {
        let itemContainer = e.target;
        let series = itemContainer.dataItem.dataContext;

        chart.series.each(function(chartSeries) {
          if (chartSeries != series) {
            chartSeries.strokes.template.setAll({
              strokeOpacity: 0.15,
              stroke: am5.color(0x000000)
            });
          } else {
            chartSeries.strokes.template.setAll({
              strokeWidth: 3
            });
          }
        });
      });

      legend.itemContainers.template.events.on("pointerout", function(e) {
        let itemContainer = e.target;
        let series = itemContainer.dataItem.dataContext;

        chart.series.each(function(chartSeries) {
          chartSeries.strokes.template.setAll({
            strokeOpacity: 1,
            strokeWidth: 1,
            stroke: chartSeries.get("fill")
          });
        });
      });

      legend.itemContainers.template.set("width", am5.p100);
      legend.valueLabels.template.setAll({
        width: am5.p100,
        textAlign: "right"
      });

      legend.data.setAll(chart.series.values);

      chart.appear(1000, 100);

      return () => {
        root.dispose();
      };
    }
  }, [salesData]);

  const transformSalesData = (salesTableData) => {
    const result = {};

    salesTableData.forEach(row => {
      const date = new Date(row.date).getTime();
      if (!result[date]) {
        result[date] = { date: date, warehouseA: 0, warehouseB: 0, warehouseC: 0 };
      }
      if (row.warehouse === 'Warehouse A') result[date].warehouseA += parseFloat(row.totalPrice);
      if (row.warehouse === 'Warehouse B') result[date].warehouseB += parseFloat(row.totalPrice);
      if (row.warehouse === 'Warehouse C') result[date].warehouseC += parseFloat(row.totalPrice);
    });

    return Object.values(result);
  };

  const headers = [
    { key: 'orderId', header: 'Order ID' },
    { key: 'itemId', header: 'Item ID' },
    { key: 'warehouse', header: 'Warehouse' },
    { key: 'quantitySold', header: 'Quantity Sold' },
    { key: 'unitPrice', header: 'Unit Price' },
    { key: 'totalPrice', header: 'Total Price' },
  ];

  return (
    <div className="reports-container">
      <h2>All Sales Report</h2>
      <div className="chart-container" ref={chartRef}></div>
      
      <div className="table-container">
        <TableContainer title="Sales Data">
          <Table className="table">
            <TableHead>
              <TableRow>
                {headers.map((header) => (
                  <TableHeader key={header.key}>{header.header}</TableHeader>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {salesTableData.map((row, index) => (
                <TableRow key={index}>
                  {headers.map((header) => (
                    <TableCell key={header.key}>{row[header.key]}</TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default Reports;
