import { View, Text } from "react-native";
import React from "react";
import moment from "moment";
import { Colors } from "../../constants/Colors";

export default function UserTripCard({ trip }) {
  const formatData = (data) => {
    return JSON.parse(data);
  };

  return (
    <View
      style={{
        marginTop: 20,
        display: "flex",
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
      }}
    >
      <Image
        source={{
          uri:
            "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=" +
            formatData(trip.tripData).locationInfo?.photoRef +
            "&key=" +
            processColor.env.EXPO_PUBLIC_GOOGLE_MAP_KEY,
        }}
        style={{
          width: 100,
          height: 100,
          borderRadius: 15,
        }}
      />
      {/* <Image
        source={require("./../../assets/images/react-logo@2x.png")}
        style={{
          width: 100,
          height: 100,
          //   objectFit: "cover",
          borderRadius: 15,
        }}
      /> */}
      <View>
        <Text
          style={{
            fontFamily: "outfit-medium",
            fontSize: 18,
          }}
        >
          {trip.tripPlan?.travelPlan?.location}
        </Text>
        <Text
          style={{
            color: Colors.GRAY,
            fontFamily: "outfit",
            fontSize: 14,
          }}
        >
          {moment(formatData(trip.tripData).startDate).format("DD MM yyyy")}
        </Text>
        <Text
          style={{
            color: Colors.GRAY,
            fontFamily: "outfit",
            fontSize: 14,
          }}
        >
          {formatData(trip.tripData).traveler.title}
        </Text>
      </View>
    </View>
  );
}
