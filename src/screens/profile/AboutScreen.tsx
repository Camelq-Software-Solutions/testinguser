import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function AboutScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Logo placeholder */}
      <View style={styles.logoContainer}>
        <Ionicons name="bicycle" size={64} color="#23235B" />
      </View>
      <Text style={styles.appName}>RoQeT User</Text>
      <Text style={styles.description}>
        Roqet is your smart, safe, and reliable ride companion. Book rides, track your journey live, and share your location with loved ones in real time.
      </Text>
      <Text style={styles.sectionTitle}>Key Features</Text>
      <View style={styles.featuresList}>
        <View style={styles.featureItem}>
          <Ionicons name="location-sharp" size={20} color="#22c55e" style={styles.featureIcon} />
          <Text style={styles.featureText}>Live ride tracking on the map</Text>
        </View>
        <View style={styles.featureItem}>
          <Ionicons name="share-social" size={20} color="#23235B" style={styles.featureIcon} />
          <Text style={styles.featureText}>Share your ride via a secure link</Text>
        </View>
        <View style={styles.featureItem}>
          <Ionicons name="shield-checkmark" size={20} color="#E53935" style={styles.featureIcon} />
          <Text style={styles.featureText}>Safety-first design and support</Text>
        </View>
        <View style={styles.featureItem}>
          <Ionicons name="cash-outline" size={20} color="#F57C00" style={styles.featureIcon} />
          <Text style={styles.featureText}>Transparent pricing and offers</Text>
        </View>
        <View style={styles.featureItem}>
          <Ionicons name="help-circle-outline" size={20} color="#888" style={styles.featureIcon} />
          <Text style={styles.featureText}>24/7 help & support</Text>
        </View>
        {/* New features below */}
        <View style={styles.featureItem}>
          <Ionicons name="female" size={20} color="#E53935" style={styles.featureIcon} />
          <Text style={styles.featureText}>She to She (women driver for women rider)</Text>
        </View>
        <View style={styles.featureItem}>
          <Ionicons name="card-outline" size={20} color="#23235B" style={styles.featureIcon} />
          <Text style={styles.featureText}>Payment gateway for secure payments</Text>
        </View>
        <View style={styles.featureItem}>
          <Ionicons name="calendar-outline" size={20} color="#22c55e" style={styles.featureIcon} />
          <Text style={styles.featureText}>Schedule a ride in advance</Text>
        </View>
        <View style={styles.featureItem}>
          <Ionicons name="person-add-outline" size={20} color="#F57C00" style={styles.featureIcon} />
          <Text style={styles.featureText}>Book a ride for a friend</Text>
        </View>
      </View>
      <Text style={styles.sectionTitle}>Contact & Support</Text>
      <Text style={styles.supportText}>For help or feedback, email us at:</Text>
      <Text style={styles.email}>support@roqet.com</Text>
      <Text style={styles.supportText}>Or call us:</Text>
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginBottom: 32 }}>
        <Ionicons name="call" size={18} color="#22c55e" style={{ marginRight: 8 }} />
        <Text style={styles.phone}>+91 98765 43210</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    padding: 24,
    backgroundColor: '#F7F7F7',
  },
  logoContainer: {
    marginTop: 32,
    marginBottom: 16,
    alignItems: 'center',
  },
  appName: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#23235B',
    marginBottom: 8,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    color: '#444',
    textAlign: 'center',
    marginBottom: 24,
    marginHorizontal: 8,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#23235B',
    marginTop: 18,
    marginBottom: 8,
    alignSelf: 'flex-start',
  },
  featuresList: {
    width: '100%',
    marginBottom: 18,
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  featureIcon: {
    marginRight: 10,
  },
  featureText: {
    fontSize: 15,
    color: '#222',
  },
  supportText: {
    fontSize: 15,
    color: '#444',
    marginBottom: 2,
    textAlign: 'center',
  },
  email: {
    fontSize: 15,
    color: '#23235B',
    fontWeight: 'bold',
    marginBottom: 32,
    textAlign: 'center',
  },
  phone: {
    fontSize: 15,
    color: '#23235B',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
