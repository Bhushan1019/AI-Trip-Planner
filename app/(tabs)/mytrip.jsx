import { View, Text, ActivityIndicator, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { Colors } from "./../../constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import StartNewTripCard from "../../components/MyTrip/StartNewTripCard";
import { collection, getDocs, query } from "firebase/firestore";
import { auth, db } from "../../configs/FirebaseConfig";
import UserTripList from "../../components/MyTrip/UserTripList";

export default function Mytrip() {
  const [userTrip, setUserTrip] = useState([]);
  const user = auth.currentUser;
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    user && GetMyTrips();
  }, [user]);

  const GetMyTrips = async () => {
    setLoading(true);
    setUserTrip([]);
    const q = query(
      collection(db, "UserTrips"),
      where("userEmail", "==", user?.email)
    );
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
      setUserTrip((prev) => [...prev, doc.data()]);
    });
    setLoading(false);
  };

  return (
    <ScrollView
      style={{
        padding: 25,
        paddingTop: 55,
        backgroundColor: Colors.WHITE,
        height: "100%",
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontFamily: "outfit-bold",
            fontSize: 35,
          }}
        >
          Mytrip
        </Text>
        <Ionicons name="add-circle" size={35} color="black" />
      </View>
      {loading && <ActivityIndicator size={"large"} color={Colors.PRIMARY} />}
      {userTrip?.length == 0 ? (
        <StartNewTripCard />
      ) : (
        <UserTripList userTrip={userTrip} />
      )}
    </ScrollView>
  );
}
