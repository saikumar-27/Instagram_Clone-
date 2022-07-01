import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Divider } from "react-native-elements/dist/divider/Divider";

// Like, Comment, Share, Save, icons
const PostFooterIcons = [
  {
    name: "like",
    imageUrl: "https://img.icons8.com/material-outlined/24/ffffff/hearts.png",
    likedImageUrl: "https://img.icons8.com/color/344/filled-like.png",
  },
  {
    name: "Comment",
    imageUrl:
      "https://img.icons8.com/material-outlined/24/ffffff/speech-bubble--v1.png",
  },
  {
    name: "Share",
    imageUrl:
      "https://img.icons8.com/external-outline-juicy-fish/60/ffffff/external-share-arrows-outline-outline-juicy-fish.png",
  },
  {
    name: "Save",
    imageUrl:
      "https://img.icons8.com/external-bearicons-detailed-outline-bearicons/64/ffffff/external-Save-social-media-bearicons-detailed-outline-bearicons.png",
  },
];

const Post = ({ post }) => {
  return (
    <View style={{ marginBottom: 30 }}>
      <Divider
        style={{ backgroundColor: "#595959" }}
        width={1}
        orientation="vertical"
      />
      <PostHeader post={post} />
      <PostImage post={post} />
      <View style={{ marginHorizontal: 15, marginTop: 10 }}>
        <PostFooter />
        <Likes post={post} />
        <Caption post={post} />
        <CommentsSection post={post} />
        <Comments post={post} />
      </View>
    </View>
  );
};

// Header section
const PostHeader = ({ post }) => (
  <View>
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        margin: 5,
        alignItems: "center",
      }}
    >
      {/* profile . user */}
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Image source={{ uri: post.profile_picture }} style={styles.story} />
        <Text style={{ color: "white", marginLeft: 5, fontWeight: 700 }}>
          {post.user}
        </Text>
      </View>

      <Text style={{ color: "white", fontWeight: "900" }}>...</Text>
    </View>
  </View>
);

// post image

const PostImage = ({ post }) => (
  <View
    style={{
      width: "100%",
      height: 380,
    }}
  >
    <Image
      source={{ uri: post.imageUrl }}
      style={{ height: "100%", resizeMode: "cover" }}
    />
  </View>
);

//Post footer,Retrieving icons

const PostFooter = () => (
  <View style={{ flexDirection: "row" }}>
    <View style={styles.leftFooterIconsContainer}>
      <Icon imgStyle={styles.footerIcon} imgUrl={PostFooterIcons[0].imageUrl} />
      <Icon imgStyle={styles.footerIcon} imgUrl={PostFooterIcons[1].imageUrl} />
      <Icon imgStyle={styles.footerIcon} imgUrl={PostFooterIcons[2].imageUrl} />
    </View>
    <View style={{ flex: 1, alignItems: "flex-end" }}>
      <Icon imgStyle={styles.footerIcon} imgUrl={PostFooterIcons[3].imageUrl} />
    </View>
  </View>
);

//TouchableOpacity for all Icons

const Icon = ({ imgStyle, imgUrl }) => (
  <TouchableOpacity>
    <Image style={imgStyle} source={{ uri: imgUrl }} />
  </TouchableOpacity>
);

//Likes

const Likes = ({ post }) => (
  <View style={{ flexDirection: "row", marginTop: 4 }}>
    <Text style={{ color: "white", fontWeight: "600" }}>
      {post.likes.toLocaleString("en")} likes
    </Text>
  </View>
);

//Caption

const Caption = ({ post }) => (
  <View style={{ marginTop: 5 }}>
    <Text style={{ color: "white" }}>
      <Text style={{ fontWeight: "600" }}>{post.user}</Text>
      <Text> {post.caption}</Text>
    </Text>
  </View>
);

//CommentsSection
// post.comments.length  👉 0 or 1 or 2 ...
// 0 👉 falsy
// 1 👉 truthy

// 0 comments 👉 Don't render Component
// 1 comment  👉 render Component without "all" and singular comment
// 2 comments 👉 render Component with "all" and plural comment

const CommentsSection = ({ post }) => (
  <View style={{ marginTop: 5 }}>
    {!!post.comments.length && ( // Double -negation
      <Text style={{ color: "gray" }}>
        View{post.comments.length > 1 ? " all" : ""} {post.comments.length} {""}
        {post.comments.length > 1 ? "comments" : "comment"}
      </Text>
    )}
  </View>
);

const Comments = ({ post }) => (
  <>
    {post.comments.map((comments, index) => (
      <View key={index} style={{ flexDirection: "row", marginTop: 5 }}>
        <Text style={{ color: "white" }}>
          <Text style={{ fontWeight: "600" }}> {comments.user}</Text>{" "}
          {comments.comment}
        </Text>
      </View>
    ))}
  </>
);

// Post profile picture styling
const styles = StyleSheet.create({
  story: {
    width: 32,
    height: 32,
    borderRadius: 50,
    marginLeft: 6,
    borderWidth: 1,
    borderColor: "#ff8501",
  },
  footerIcon: {
    width: 33,
    height: 33,
  },

  leftFooterIconsContainer: {
    flexDirection: "row",
    width: "32%",
    justifyContent: "space-between",
  },
});
export default Post;
