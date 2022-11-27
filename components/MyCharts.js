import { StyleSheet, Text, View, Dimensions } from "react-native";
import React from "react";
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from "react-native-chart-kit";
const MyCharts = () => {
  return (
    <View
      style={{
        marginTop: -80,
      }}
    >
      <Text
        style={{
          color: "rgba(0,0,255,0.6)",
          fontFamily: "Philosopher",
          fontSize: 18,
          margin:25
        }}
      >
        Income/Expenses :
      </Text>
      <LineChart
        data={{
          labels: ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug"],
          datasets: [
            {
              data: [2, 8, 5, 6, 7, 3, 10, 1],
            },
          ],
        }}
        width={350} // from react-native
        height={220}
        yAxisLabel="$"
        yAxisSuffix="k"
        yAxisInterval={1} // optional, defaults to 1
        const
        chartConfig={{
          backgroundGradientFrom: "#fff",
          backgroundGradientFromOpacity: 0,
          backgroundGradientTo: "rgba(255,255,255,0.2)",
          backgroundGradientToOpacity: 0.5,
          color: (opacity = 1) => `rgba(0,0,255, ${opacity})`,
          strokeWidth: 2, // optional, default 3
          barPercentage: 0.5,
          useShadowColorFromDataset: false, // optional
          stroke: "rgba(0,0,255,0.6)",
          propsForDots: {
            r: "6",
            strokeWidth: "2",
            stroke: "rgba(0,0,255,0.6)",
          },
        }}
        bezier
        style={{
          borderRadius: 16,
          alignSelf: "center",
        }}
      />
    </View>
  );
};

export default MyCharts;

const styles = StyleSheet.create({});
