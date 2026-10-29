import { useState } from 'react';

type UserData={id:string;name:string;surname:string;age:string;banned:boolean;isEdit:boolean};
type Update=(id:string,field:string,value:string|boolean)=>void;
function User({user,update}:{user:UserData;update:Update}){return <tr><td>{user.name}</td><td>{user.surname}</td><td>{user.age}</td><td>{user.banned?'Забанен':'Не забанен'}<button onClick={()=>update(user.id,'banned',!user.banned)}>Бан / разбан</button></td></tr>;}
function ComponentsChangingParentState(){
const [users,setUsers]=useState([{id:'u1',name:'user1',surname:'surn1',age:'30',banned:false,isEdit:false},{id:'u2',name:'user2',surname:'surn2',age:'31',banned:false,isEdit:false},{id:'u3',name:'user3',surname:'surn3',age:'32',banned:false,isEdit:false}]);function update(id:string,field:string,value:string|boolean){setUsers(a=>a.map(u=>u.id===id?{...u,[field]:value}:u));}return <table><thead><tr><th>Имя</th><th>Фамилия</th><th>Возраст</th><th>Действия</th></tr></thead><tbody>{users.map(user=><User key={user.id} user={user} update={update}/>)}</tbody></table>;
}
export default ComponentsChangingParentState;
