import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {RAZORPAY_KEY_ID, RAZORPAY_KEY_SECRET} from '@env';
import RazorpayCheckout from 'react-native-razorpay';

const App = () => {
  let razorpayKeyId = RAZORPAY_KEY_ID;
  let razorpayKeySecret = RAZORPAY_KEY_SECRET;
  const amount = 100;
  const currency = 'INR';

  const handlePayment = () => {
    var options = {
      description: 'Credits towards consultation',
      image: 'https://i.imgur.com/3g7nmJC.jpg',
      currency: currency,
      key: razorpayKeyId,
      amount: amount * 100,
      name: 'Acme Corp',
      order_id: '',
      prefill: {
        email: 'xyz@gmail.com',
        contact: '9191919191',
        name: 'Person Name',
      },
      theme: {color: '#53a20e'},
    };
    RazorpayCheckout.open(options)
      .then(data => {
        // handle success
        alert(`Success: ${data.razorpay_payment_id}`);
      })
      .catch(error => {
        // handle failure
        alert(`Error: ${error.code} | ${error.description}`);
      });
  };

  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        height: '100%',
      }}>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          height: 450,
          width: '90%',
          backgroundColor: 'orange',
          borderRadius: 20,
        }}>
        <Image
          style={{width: 300, height: 300, borderRadius: 20}}
          source={{
            uri: 'https://i.pinimg.com/736x/d0/c4/23/d0c4238f8f58e71cb625065a31622243.jpg',
          }}
        />
        <TouchableOpacity
          onPress={handlePayment}
          style={{
            height: 50,
            width: 165,
            backgroundColor: 'green',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 30,
            borderRadius: 10,
          }}>
          <Text style={{fontSize: 20, color: '#fff', fontWeight: '500'}}>
            Pay Now
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
