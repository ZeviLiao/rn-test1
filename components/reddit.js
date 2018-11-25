import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class Reddit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: []
    };
  }

  componentWillMount() {
    fetch('http://localhost:3000/todos', { method: 'get' })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        this.setState({ posts: data });
      });
  }

  handleClick(e) {
    fetch('http://localhost:3000/todos', {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name: 'zevi' })
    });
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.posts.map(post => (
          <Text key={post.id} style={styles.text}>
            {' '}
            {post.name}{' '}
          </Text>
        ))}
        <Button
          onPress={this.handleClick.bind(this)}
          title="Learn More"
          color="#841584"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: 'steelblue',
    // padding: 100
    marginTop: 100
  },
  text: {
    color: 'white',
    fontSize: 24
  }
});
