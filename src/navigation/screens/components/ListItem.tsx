import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

type Props = {
  imageUrl: string;
  title: string;
  author: string;
  onPress: () => void;
};

const ListItem = ({ imageUrl, title, author, onPress }: Props) => {
  return (
    <TouchableOpacity style={styles.itemContainer} onPress={onPress}>
      <View style={styles.itemImageContainer}>
        {!!imageUrl && (
          <Image style={styles.itemImageView} source={{ uri: imageUrl }} />
        )}
      </View>
      <View style={styles.itemTitleContainer}>
        <Text style={styles.itemTitleText} numberOfLines={3}>
          {title}
        </Text>
        <Text style={styles.itemTitleAuthor}>{author}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  itemContainer: {
    height: 100,
    width: '100%',
    borderColor: '#000000',
    borderWidth: 1,
    flexDirection: 'row',
  },
  itemImageContainer: {
    width: 100,
    backgroundColor: '#FF0000',
  },
  itemImageView: {
    width: 100,
    height: 100,
  },
  itemTitleContainer: {
    flex: 1,
    padding: 10,
    justifyContent: 'space-between',
  },
  itemTitleText: {
    fontSize: 12,
  },
  itemTitleAuthor: {
    fontSize: 10,
    color: 'gray',
  },
});
