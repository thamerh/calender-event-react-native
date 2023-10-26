import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet, Text  ,Dimensions} from 'react-native';
import { Agenda } from 'react-native-calendars';
import { Card, Avatar } from 'react-native-paper';

const App: React.FC = () => {
  const [items, setItems] = useState({});

  const events = [
    {
      date: '2023-10-26',
      name: 'plat 1',
      height: 80,
    },
    {
      date: '2023-10-26',
      name: 'plat 2',
      height: 80,
    },
    {
      date: '2023-10-26',
      name: 'plat 3',
      height: 80,
    },
    {
      date: '2023-10-27',
      name: 'Event 2',
      height: 120,
    },
    // Add more events as needed
  ];
 // Get the device height
  const windowHeight = Dimensions.get('window').height;
 // Calculate the desired height (one-fourth of the device height)
  const desiredHeight = windowHeight / 8;
  const oneWeekFromToday = new Date();
  oneWeekFromToday.setDate(oneWeekFromToday.getDate() + 7);

  const loadItems = (day) => {
    const newItems = {};

    events.forEach(event => {
      if (event.date === day.dateString) {
        if (!newItems[day.dateString]) {
          newItems[day.dateString] = [];
        }

        newItems[day.dateString].push({
          name: event.name,
          height: event.height,
        });
      }
    });

    setItems(newItems);
  };

  const renderItem = (item) => {
    return (
      <TouchableOpacity style={{ marginRight: 10, marginTop: 17 }}>
        <Card>
          <Card.Content>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text>{item.name}</Text>
              {/* <Avatar.Text label="J" /> */}
              <Avatar.Image
               size={80} // Set the size you want
               source={require('./assets/kouskous.jpeg')} // Replace with the path to your image
               />
            </View>
          </Card.Content>
        </Card>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{ flex: 1  }}>
      <View style={{ height: desiredHeight,marginBottom:20, backgroundColor: '#0DB0D4' , borderBottomRightRadius : 40 , borderBottomLeftRadius:40 ,justifyContent:"center" , alignItems:"center"}}> 
      <Text style={{color:"white" ,fontSize: 25}}>Meal plan</Text>
      </View>

      <Agenda
        items={items}
        loadItemsForMonth={loadItems}
        selected={'2023-10-26'} // Set the initial date to display events
        // minDate={new Date()} // Disable dates before today
        // maxDate={oneWeekFromToday} // Disable dates more than one week from today
        renderItem={renderItem}
      />
    </View>
  );
};

export default App;

	
