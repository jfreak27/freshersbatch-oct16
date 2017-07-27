export function testCollections(){


    let MusicUserSet = new Set();
    MusicUserSet.add("aditya");
    MusicUserSet.add("rajo");
    MusicUserSet.add("navi");
    MusicUserSet.add("ammar");
   
    let SportsUserSet = new Set();
    SportsUserSet.add("tejs");
    SportsUserSet.add("sachin");
    SportsUserSet.add("neel");


    let MusicMessages = ["hello","hi","whats going on"];
    let SportsMessages = ["What a game", "I liked last nights game"];


    var ChatRoomMap = new Map();
    ChatRoomMap.set("MusicUsers",MusicUserSet);
    ChatRoomMap.set("SportsUsers",SportsUserSet);
    ChatRoomMap.set("MusicMessages",MusicMessages);
    ChatRoomMap.set("SportsMessages",SportsMessages);



    function getUserFromChatroom(Chatroom){
        console.log(`Usernames from ${Chatroom+"Chat Room"}`);
        console.log(ChatRoomMap.get(Chatroom+"Users"));
    }
    
    function getMsgsFromChatroom(Chatroom) {
        console.log(`Messages from ${Chatroom+"Chat Room"}:`);
        console.log(ChatRoomMap.get(Chatroom+"Messages"));
    }




    getUserFromChatroom("Music");
    getUserFromChatroom("Sports");
    getMsgsFromChatroom("Sports");
    getMsgsFromChatroom("Music");
}