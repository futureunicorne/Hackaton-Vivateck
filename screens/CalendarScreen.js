import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';

export default class CalendarScreen extends React.Component {
  static route = {
    navigationBar: {
      title: 'Calendar',
      tintColor: '#ffffff',
      backgroundColor: '#00008f',
    },
  };

  render() {
    return (
      <ScrollView
        style={styles.container}
        contentContainerStyle={this.props.route.getContentContainerStyle()}>

        <Calendar
  // Initially visible month. Default = Date()
  current={'2017-07-01'}
  // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
  minDate={'2017-07-06'}
  // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
  maxDate={'2018-09-30'}
  // Handler which gets executed on day press. Default = undefined
  onDayPress={(day) => {console.log('selected day', day)}}
  // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
  monthFormat={'MMMM yyyy'}
  // Handler which gets executed when visible month changes in calendar. Default = undefined
  onMonthChange={(month) => {console.log('month changed', month)}}
  // Hide month navigation arrows. Default = false
  hideArrows={false}
  // Replace default arrows with custom ones (direction can be 'left' or 'right')
  //renderArrow={(direction) => (<Arrow />)}
  // Do not show days of other months in month page. Default = false
  hideExtraDays={true}
  // If hideArrows=false and hideExtraDays=false do not swich month when tapping on greyed out
  // day from another month that is visible in calendar page. Default = false
  disableMonthChange={false}
  // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday.
  firstDay={1}
    // Collection of dates that have to be marked. Default = {}
  markedDates={{
    '2017-06-16': {selected: true, marked: true},
    '2017-06-12': {selected: true, marked: true},
    '2017-06-19': {selected: true, marked: true},
    '2017-06-22': {selected: true, marked: true},
    '2017-06-23': {selected: true, marked: true},
    '2017-06-30': {selected: true, marked: true},
    '2017-07-01': {selected: true, marked: true},
    '2017-07-03': {selected: true, marked: true},
    '2017-07-04': {selected: true, marked: true},
    '2017-07-07': {selected: true, marked: true},
    '2017-07-10': {selected: true, marked: true}
  }}
  theme={{
    calendarBackground: '#ffffff',
    textSectionTitleColor: '#b6c1cd',
    selectedDayBackgroundColor: '#494df4',
    selectedDayTextColor: '#ffffff',
    todayTextColor: '#f07662',
    dayTextColor: '#5f5f5f',
    textDisabledColor: '#cccccc',
    dotColor: '#494df4',
    selectedDotColor: '#ffffff',
    arrowColor: '#ff1721',
    monthTextColor: '#00005b'
  }}
/>

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
  },
});
