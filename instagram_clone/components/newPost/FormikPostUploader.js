import { View, Text, Image, TextInput, Button } from "react-native";
import React, { useState } from "react";
import * as Yup from "yup";
import { Formik } from "formik";
import { Divider } from "react-native-elements/dist/divider/Divider";

const PLACEHOLDER_IMG =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzHO7vMHaR56MCR89FvfYAbwfTZN9BX7EaSw&usqp=CAU";

const uploadPostSchema = Yup.object().shape({
  imageUrl: Yup.string().url().required("A URL is required"),
  caption: Yup.string().max(2200, "Caption has reached the character limit."),
});

const FormikPostUploader = ({ navigation }) => {
  const [thumbnailUrl, setThumbnailUrl] = useState(PLACEHOLDER_IMG);
  return (
    <Formik
      initialValues={{ caption: "", imageUrl: "" }}
      onSubmit={(values) => {
        console.log(values);
        console.log("Your post  was submitted successfully🎉");
        navigation.goBack();
      }}
      validationSchema={uploadPostSchema}
      validateOnMount={true}
    >
      {/* Destructuring bunch of values , and returning */}
      {({
        handleBlur,
        handleChange,
        handleSubmit,
        values,
        errors,
        isValid,
      }) => (
        <>
          <View
            style={{
              margin: 20,
              justifyContent: "space-between",
              flexDirection: "row",
            }}
          >
            <Image
              source={{ uri: thumbnailUrl ? thumbnailUrl : PLACEHOLDER_IMG }}
              style={{ width: 100, height: 100 }}
            />
            {/*  Caption  for the post*/}
            <View style={{ flex: 1, marginLeft: 12 }}>
              <TextInput
                style={{ color: "white", fontSize: 20 }}
                placeholder="Write a Caption..."
                placeholderTextColor="gray"
                multiline={true}
                onChangeText={handleChange("caption")}
                onBlur={handleBlur("caption")}
                value={values.caption}
              />
            </View>
          </View>
          <Divider
            style={{ backgroundColor: "#595959" }}
            width={0.2}
            orientation="vertical"
          />

          {/* Image URl */}
          <TextInput
            onChange={(e) => setThumbnailUrl(e.nativeEvent.text)}
            style={{ color: "white", fontSize: 18 }}
            placeholder="Enter Image URL"
            placeholderTextColor="gray"
            onChangeText={handleChange("imageUrl")}
            onBlur={handleBlur("imageUrl")}
            value={values.imageUrl}
          />

          {/* Error message if url is incorrect */}
          {errors.imageUrl && (
            <Text style={{ fontSize: 10, color: "red" }}>
              {errors.imageUrl}
            </Text>
          )}
          <Button onPress={handleSubmit} title="Share" disabled={!isValid} />
        </>
      )}
    </Formik>
  );
};

export default FormikPostUploader;
