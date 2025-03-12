import { Spacer } from "@/src/components/common/Spacer";
import { ListImage } from "@/src/components/onboarding/ListImages";
import { PaginationDots } from "@/src/components/onboarding/PaginationDots";
import { SwipeButton } from "@/src/components/onboarding/SwipeButton";
import { ONBOARDING_IMAGES } from "@/src/constants";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import { Dimensions, Text, View } from "react-native";
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from "react-native-reanimated";
import { styles } from "./styles";
import { AuthStackParamList } from "@/src/navigation/AuthStack";
import { NavigationKeys } from "@/src/navigation/NavigationKeys";
const { width: WindowWidth } = Dimensions.get("window");

const ListImageWidth = WindowWidth * 0.8;

const ItemInternalPadding = 10;
const ItemContainerWidth = ListImageWidth + ItemInternalPadding * 2;

export const OnBoarding = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<AuthStackParamList>>();
  const scrollX = useSharedValue(0);

  const onScroll = useAnimatedScrollHandler({
    onScroll: ({ contentOffset }) => {
      scrollX.value = contentOffset.x;
    },
  });

  const navigateToLogin = () => {
    navigation.replace(NavigationKeys.Login);
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <MaterialIcons name="pets" size={32} color="#0F5132" />
        <Text style={[styles.title]}>𝓑𝓪𝓻𝓮𝓑𝓸𝓷𝓮</Text>
      </View>
      <View>
        <Animated.FlatList
          data={ONBOARDING_IMAGES}
          contentContainerStyle={styles.contentContainer}
          onScroll={onScroll}
          decelerationRate={"fast"}
          pagingEnabled
          snapToInterval={ItemContainerWidth}
          renderItem={({ item, index }) => (
            <ListImage
              uri={item}
              itemWidth={ListImageWidth}
              style={{
                marginHorizontal: ItemInternalPadding,
                borderRadius: 20,
                overflow: "hidden",
              }}
              scrollOffset={scrollX}
              index={index}
            />
          )}
          keyExtractor={(item) => item}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
        <Spacer mb={15} />
        <PaginationDots
          data={ONBOARDING_IMAGES}
          scrollX={scrollX}
          itemWidth={ItemContainerWidth}
        />

        <View style={styles.body}>
          <View style={styles.headingContainer}>
            <Text style={styles.heading}>
              BareBone Service for Tracking{"\n"}Your{" "}
              <Text style={[styles.highlightText]}>Best Friend.</Text>
            </Text>
            <Text style={styles.description}>
              Keep track of your pet's health activities.
            </Text>
          </View>
        </View>
      </View>

      <SwipeButton
        onComplete={navigateToLogin}
        iconName="pets"
        text="Get Started"
      />
    </View>
  );
};
