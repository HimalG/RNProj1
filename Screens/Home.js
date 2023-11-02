import React, { useState } from 'react';
import axios from 'axios';
import { View, Text, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
  const [activity, setActivity] = useState('');

  const fetchActivity = async () => {
    try {
      const response = await axios.get('https://www.boredapi.com/api/activity');
      debugger
      setActivity(response.data.activity);
    } catch (error) {
      console.error("Error fetching activity:", error);
      setActivity('Failed to fetch activity. Please try again.');
    }
  };

  return (
    <View style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <Button title="I am bored" 
      onClick={fetchActivity}
      ></Button>
       {activity}
    </View>
  );
}

export default HomeScreen;
