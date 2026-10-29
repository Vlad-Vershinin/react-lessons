import { useState } from 'react';

type UserData={id:string;name:string;surname:string;age:string;banned:boolean;isEdit:boolean};
type Update=(id:string,field:string,value:string|boolean)=>void;
function User({user,update}:{user:UserData;update:Update}){return <tr>{(['name','surname','age'] as const).map(field=><UserField key={field} text={user[field]} isEdit={user.isEdit} onChange={value=>update(user.id,field,value)}/>)}<td>ID: {user.id} {user.banned?'Забанен':''}<button onClick={()=>update(user.id,'banned',!user.banned)}>{user.banned?'Разбанить':'Забанить'}</button><button onClick={()=>update(user.id,'isEdit',!user.isEdit)}>{user.isEdit?'Сохранить':'Редактировать'}</button></td></tr>;}
function UserField({text,isEdit,onChange}:{text:string;isEdit:boolean;onChange:(value:string)=>void}){return <td>{isEdit?<input aria-label="Значение поля" value={text} onChange={e=>onChange(e.target.value)}/>:<span>{text}</span>}</td>;}

function ComponentsEditingGrandparentState(){
const [users,setUsers]=useState([{id:'u1',name:'user1',surname:'surn1',age:'30',banned:false,isEdit:false},{id:'u2',name:'user2',surname:'surn2',age:'31',banned:false,isEdit:false},{id:'u3',name:'user3',surname:'surn3',age:'32',banned:false,isEdit:false}]);function update(id:string,field:string,value:string|boolean){setUsers(a=>a.map(u=>u.id===id?{...u,[field]:value}:u));}return <table><thead><tr><th>Имя</th><th>Фамилия</th><th>Возраст</th><th>Действия</th></tr></thead><tbody>{users.map(user=><User key={user.id} user={user} update={update}/>)}</tbody></table>;
}
export default ComponentsEditingGrandparentState;
