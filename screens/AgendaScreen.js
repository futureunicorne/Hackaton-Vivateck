import React from 'react';
import { ScrollView, StyleSheet, View, Text } from 'react-native';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';

export default class AgendaScreen extends React.Component {
  static route = {
    navigationBar: {
      title: 'Agenda',
      tintColor: '#ffffff',
      backgroundColor: '#00008f',
    },
  };

  render() {
    return (
      <ScrollView
        style={styles.container}
        contentContainerStyle={this.props.route.getContentContainerStyle()}>

        <Agenda
  // the list of items that have to be displayed in agenda. If you want to render item as empty date
  // the value of date key kas to be an empty array []. If there exists no value for date key it is
  // considered that the date in question is not yet loaded
  items={
    {'2017-06-11': [],
    '2017-06-12': [{text: 'Luc', message : "OK"}],
    '2017-06-13': [],
    '2017-06-14': [],
    '2017-06-15': [],
    '2017-06-16': [{text: 'Marie:', message : "I did a little cleaning"}],
    '2017-06-17': [],
    '2017-06-18': [],
    '2017-06-19': [{text: 'Luc', message : "Quick visit after work"}],
    '2017-06-20': [],
    '2017-06-21': [],
    '2017-06-22': [{text: 'Marie', message : "Shopping with Grandma"}],
    '2017-06-23': [{text: 'Marie', message : "Quick visit"}],
    '2017-06-24': [],
    '2017-06-25': [],
    '2017-06-26': [],
    '2017-06-27': [],
    '2017-06-28': [],
    '2017-06-29': [],
    '2017-06-30': [{text: 'Agnès', message : "Laundry + groceries"}],
    '2017-07-01': [{text: 'Marie', message : "Went to the doctor with her for her appointment"}],
    '2017-07-02': [],
    '2017-07-03': [{text: 'Luc', message : "I called her for 15 mintues"}],
    '2017-07-04': [{text: 'Agnès', message : "Paperwork + Bank"}],
    '2017-07-05': [],
    '2017-07-06': [],
    '2017-07-07': [{text: 'Luc', message : "Paul's birthday"}],
    '2017-07-08': [],
    '2017-07-09': [{text: 'Luc', message : "Quick visit after work, drank coffee"}],
    '2017-07-10': [{text: 'Marie', message : "Cleaning, a few groceries and we had supper together"}],
    '2017-07-11': [],
    '2017-07-12': [],
    '2017-07-13': [],
    '2017-07-14': [],
    '2017-07-15': []
    }}
  // callback that gets called when items for a certain month should be loaded (month became visible)
  loadItemsForMonth={(month) => {console.log('trigger items loading')}}
  // callback that gets called on day press
  onDayPress={(day)=>{console.log('day pressed')}}
  // callback that gets called when day changes while scrolling agenda list
  onDayChange={(day)=>{console.log('day changed')}}
  // initially selected day
  selected={'2017-07-10'}
  // specify how each item should be rendered in agenda
  renderItem={(item, firstItemInDay) => {return ( <View style={styles.item}><Text style={[{fontWeight: 'bold', textAlign: 'center'}]}>{item.text}</Text><Text>{item.message}</Text></View>);}}
  // specify how empty date content with no items should be rendered
  renderEmptyDate={() => {return (<View />);}}
  // specify your item comparison function for increased performance
  rowHasChanged={(r1, r2) => {return r1.text !== r2.text}}
  // Hide knob button. Default = false
  hideKnob={false}
  // agenda theme
  theme = {{
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
  item: {
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17
  },
});
