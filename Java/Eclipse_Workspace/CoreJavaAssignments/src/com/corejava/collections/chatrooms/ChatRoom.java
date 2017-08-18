package com.corejava.collections.chatrooms;

import java.util.*;

class ChatRoom {

	
	private String chatRoomName;
	private int userCount = 0;
	private Set<User> userList = new HashSet<User>();
	private List<String> messageList = new ArrayList<String>();
	
	ChatRoom(String name){ this.chatRoomName = name;}
	
	String getName() { return this.chatRoomName;}
	
	int getUserCount() { return this.userCount;}
	
	public void addUser(User user) {
		this.userList.add(user);
		userCount++;
	}
 	
	public void addMessage(String msg) {
		messageList.add(msg);
	}
	
	public List getMessgeList() {
		return messageList;
	}
	
	public String toString() {
		return this.chatRoomName;
	}
	
	
	public Set<User> getUserList() {
		return userList;
	}
	
	
	
	
}
