import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, Image } from 'react-native';
import { StyleSheet } from 'react-native';
import { IconButton } from 'react-native-paper';
import Fallback from './component/Fallback';

const TodoScreen = () => {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [editedTodo , setEditedTodo] = useState(null);

  const handleAddTodo = () => {
    if(todo===""){
      return;
    }
    setTodoList([...todoList, { id: Date.now().toString(), title: todo }]);
    setTodo("");
  };

  const handleDeleteTodo = (id) => {
    const updatedTodoList = todoList.filter(todo => todo.id !== id);
    setTodoList(updatedTodoList);
  };

  const handleEditTodo = (todo) =>{
    setEditedTodo(todo);
    setTodo(todo.title);
  };

  const handleUpdateTodo = () => {
    const updatedTodo = todoList.map(item => {
      if (item.id === editedTodo.id) {
        return { ...item, title: todo };
      }
      return item;
    });
    setTodoList(updatedTodo);
    setEditedTodo(null);
    setTodo("");
  };

  const renderTodo = ({ item, index }) => {
    return (
      <View style={{
        backgroundColor: "#1e80ff",
        borderRadius: 6,
        paddingHorizontal: 6,
        paddingVertical: 8,
        marginBottom: 12,
        flexDirection: "row",
        alignItems: "center",
        shadowColor:'#000',
        shadowOffset: {width: 0, height:2},
        shadowOpacity:0.8,
        shadowRadius: 5,
        elevation : 6,
      }}>
        <Text style={{ color: "#fff", fontSize: 20, fontWeight: 'bold', flex: 1 }}>{item.title}</Text>
        <IconButton icon="pencil" iconColor='#fff' onPress={() => handleEditTodo(item)} />
        <IconButton icon="trash-can" color='#fff' onPress={() => handleDeleteTodo(item.id)} />
      </View>
    );
  };

  return (
    <View style={{ marginHorizontal: 21, marginTop: 45 }}>
      <TextInput
        style={{
          borderWidth: 2,
          borderColor: "#1e90ff",
          borderRadius: 6,
          paddingVertical: 8,
          paddingHorizontal: 16,
        }}
        placeholder='Add a task'
        value={todo}
        onChangeText={(userText) => setTodo(userText)}
      />
      { editedTodo ? (
        <TouchableOpacity
          style={{
            backgroundColor: "#000",
            borderRadius: 6,
            paddingVertical: 12,
            marginTop: 24,
            alignItems: "center",
            marginVertical: 34
          }}
          onPress={handleUpdateTodo}
        >
          <Text style={{
            color: "#fff",
            fontWeight: 'bold',
            fontSize: 20,
          }}>Save</Text>
        </TouchableOpacity>
      ) : null }

      <TouchableOpacity
        style={{
          backgroundColor: "#000",
          borderRadius: 6,
          paddingVertical: 12,
          marginTop: 24,
          alignItems: "center",
          marginVertical: 34
        }}
        onPress={handleAddTodo}
      >
        <Text style={{
          color: "#fff",
          fontWeight: 'bold',
          fontSize: 20,
        }}>Add</Text>
      </TouchableOpacity>

      <FlatList data={todoList} renderItem={renderTodo} />
      {/* Check if todoList is empty and render Fallback */}
      {todoList.length === 0 && <Fallback />}
    </View>
  );
};

export default TodoScreen;

const styles = StyleSheet.create({});
