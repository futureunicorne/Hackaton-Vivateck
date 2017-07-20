import React from 'react';
import {
  Image,
  Linking,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Component,
} from 'react-native';
import ChartView from 'react-native-highcharts';

import { MonoText } from '../components/StyledText';

export default class HomeScreen extends React.Component {
  static route = {
    navigationBar: {
      visible: false,
    },
  };

  render() {
    var Highcharts='Highcharts';
    var conf={
            chart: {
                type: 'spline',
                animation: Highcharts.svg, // don't animate in old IE
                marginRight: 10,
                backgroundColor: '#fafafa',
                events: {
                    load: function () {

                        // set up the updating of the chart each second
                        var series = this.series[0];
                        setInterval(function () {
                            var x = (new Date()).getTime(), // current time
                                y = Math.random();
                            series.addPoint([x, y], true, true);
                        }, 2000);
                    }
                }
            },
            title: {
                text: 'Live grandma stats',
                style: {
                  color: '#00005b',
                  fontWeight: 'bold'
                 }
            },
            xAxis: {
                type: 'datetime',
                tickPixelInterval: 150,
                labels: {
                  style: {
                    color: '#333333'
                  }
                }
            },
            yAxis: {
                title: {
                    text: 'Value',
                    style: {
                      color: '#333333',
                     }
                },
                labels: {
                  style: {
                    color: '#333333'
                  }
                },
                plotLines: [{
                    value: 0,
                    width: 1,
                    color: '#3032c1'
                }]
            },
            tooltip: {
                formatter: function () {
                    return '<b>' + this.series.name + '</b><br/>' +
                        Highcharts.dateFormat('%Y-%m-%d %H:%M:%S', this.x) + '<br/>' +
                        Highcharts.numberFormat(this.y, 2);
                }
            },
            legend: {
                enabled: false
            },
            exporting: {
                enabled: false
            },
            series: [{
                name: 'Random number',
                color: '#333333',
                data: (function () {
                    // generate an array of random data
                    var data = [],
                        time = (new Date()).getTime(),
                        i;

                    for (i = -19; i <= 0; i += 1) {
                        data.push({
                            x: time + i * 1000,
                            y: Math.random()
                        });
                    }
                    return data;
                }())
            }]
        };
        var conf2={
                chart: {
                    type: 'bar',
                    animation: Highcharts.svg, // don't animate in old IE
                    marginRight: 10,
                    backgroundColor: '#fafafa',
                },
                title: {
                    text: 'AI powered rating',
                    style: {
                      color: '#00005b',
                      fontWeight: 'bold'
                     }
                },
                xAxis: {
                      type: 'datetime',
                      maxZoom: 3600 * 1000,
                      labels: {
                        style: {
                          color: '#333333'
                        }
                      }
                },
                yAxis: {
                    title: {
                        text: 'Value',
                        style: {
                          color: '#333333',
                         }
                    },
                    labels: {
                      style: {
                        color: '#333333'
                      }
                    },
                    plotLines: [{
                        value: 0,
                        width: 1,
                        color: '#3032C1'
                    }]
                },
                tooltip: {
                    formatter: function () {
                        return '<b>' + this.series.name + '</b><br/>' +
                            Highcharts.dateFormat('%Y-%m-%d %H:%M:%S', this.x) + '<br/>' +
                            Highcharts.numberFormat(this.y, 2);
                    }
                },
                legend: {
                    enabled: false
                },
                exporting: {
                    enabled: false
                },
                series: [{
                    name: 'Rating',
                    data: [0.75, 0.64, 0.56, 0.44, 0.72, 0.84 , 0.72],
                    pointStart: Date.UTC(2017, 6, 7),
                    pointInterval: 3600 * 1000, // one hour
                    color: '#00008f'
                }]
            };
            var conf3={
                    chart: {
                        type: 'area',
                        animation: Highcharts.svg, // don't animate in old IE
                        marginRight: 10,
                        backgroundColor: '#fafafa',
                    },
                    title: {
                        text: 'Grandma is moon walking',
                        style: {
                          color: '#00005b',
                          fontWeight: 'bold'
                         }
                    },
                    xAxis: {
                          type: 'datetime',
                          maxZoom: 24 * 3600 * 1000,
                          labels: {
                            style: {
                              color: '#333333'
                            }
                          }
                    },
                    yAxis: {
                        title: {
                            text: 'Number of Steps',
                            style: {
                              color: '#333333',
                            },
                        },
                        labels: {
                          style: {
                            color: '#333333'
                          }
                        },
                        plotLines: [{
                            value: 0,
                            width: 1,
                        }],
                        color: '#333333',
                    },
                    tooltip: {
                        formatter: function () {
                            return '<b>' + this.series.name + '</b><br/>' +
                                Highcharts.dateFormat('%Y-%m-%d %H:%M:%S', this.x) + '<br/>' +
                                Highcharts.numberFormat(this.y, 2);
                        }
                    },
                    legend: {
                        enabled: false
                    },
                    exporting: {
                        enabled: false
                    },
                    series: [{
                        name: 'Steps',
                        data: [1705, 3983, 2822, 3013, 3944, 900 , 1200],
                        pointStart: Date.UTC(2017, 6, 1),
                        pointInterval: 24 * 3600 * 1000, // one day
                        color: '#f07662'
                    }]
                };
    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}>

          <View style={styles.welcomeContainer}>
            <Image
              source={require('../assets/images/expo-wordmark.png')}
              style={styles.welcomeImage}
            />
          </View>
          <ChartView style={{height:300, width: 350}} config={conf}></ChartView>
          <ChartView style={{height:300, width: 350}} config={conf2}></ChartView>
          <ChartView style={{height:300, width: 350}} config={conf3}></ChartView>

        </ScrollView>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 15,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 20,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 0,
    marginBottom: 55,
    paddingBottom: 20,
    paddingTop: 10,
    backgroundColor: '#00008f',
  },
  welcomeImage: {
    width: 140,
    height: 38,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  welcomeImage2: {
	width: 140,
	height: 38,
	resizeMode: 'contain',
	marginTop: 3,
	marginLeft: 150,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 23,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
});
