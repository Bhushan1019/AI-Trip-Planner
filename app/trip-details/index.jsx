import { View, Text, Image, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { Colors } from "../../constants/Colors";
import moment from "moment";
import FlightInfo from "../../components/TripDetails/FlightInfo";
import HotelList from "../../components/TripDetails/HotelList";
import PlannedTrip from "../../components/TripDetails/PlannedTrip";

export default function TripDetails() {
  const navigation = useNavigation();
  const { trip } = useLocalSearchParams();
  const [tripDetails, setTripDetails] = useState([]);

  const formatData = (data) => {
    return JSON.parse(data);
  };

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: "",
    });
    setTripDetails(JSON.parse(trip));
  }, []);
  return (
    tripDetails && (
      <ScrollView>
        <Image
          source={{
            uri:
              "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=" +
              formatData(tripDetails.tripData).locationInfo?.photoRef +
              "&key=" +
              processColor.env.EXPO_PUBLIC_GOOGLE_MAP_KEY,
          }}
          style={{
            width: "100%",
            height: 330,
          }}
        />
        <View
          style={{
            padding: 15,
            backgroundColor: Colors.WHITE,
            height: "100%",
            marginTop: -30,
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
          }}
        >
          <Text
            style={{
              fontSize: 25,
              fontFamily: "outfit-bold",
            }}
          >
            {tripDetails?.tripPlan.travelPlan.location}
          </Text>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 5,
              marginTop: 5,
            }}
          >
            <Text
              style={{
                color: Colors.GRAY,
                fontFamily: "outfit",
                fontSize: 18,
              }}
            >
              {moment(formatData(tripDetails.tripData).startDate).format(
                "DD MM yyyy"
              )}
            </Text>
            <Text
              style={{
                color: Colors.GRAY,
                fontFamily: "outfit",
                fontSize: 18,
              }}
            >
              -{" "}
              {moment(formatData(tripDetails.tripData).endDate).format(
                "DD MM yyyy"
              )}
            </Text>
          </View>
          <Text
            style={{
              color: Colors.GRAY,
              fontFamily: "outfit",
              fontSize: 17,
            }}
          >
            {formatData(tripDetails.tripData)?.traveler?.title}
          </Text>

          {/* flight info  */}
          <FlightInfo flightData={tripDetails?.tripPlan?.travelPlan?.flight} />

          {/* Hotel List  */}
          <HotelList hotelList={tripDetails?.tripPlan?.travelPlan?.hotels} />

          {/* Trip Day Planner List  */}
          <PlannedTrip details={tripDetails?.tripPlan?.travelPlan.itineray} />
        </View>
      </ScrollView>
    )
  );
}
