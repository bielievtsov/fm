import React, {useState, useEffect} from 'react';
import FarmItem from '../../components/FarmItem/FarmItem';

const ProfilePage = () => {
    const [name, setName] = useState("");
    const [sname, setSName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [userId, setUserId] = useState(0);
    const [farms, setFarms] = useState([]);

    useEffect(()=> {
        fetch(`http://localhost:8080/v1/users/1`)
            .then(data => data.json())
            .then(data  =>{
                const {Email, FirstName, SecondName, Phone, Id} = data;
                setEmail(Email);
                setName(FirstName);
                setSName(SecondName);
                setPhone(Phone);
                setUserId(Id);
            })
    }, []);

    useEffect(()=> {
        fetch(`http://localhost:8080/v1/farms/`)
            .then(data => data.json())
            .then(data  =>{
                data.filter(el => el.UserId.Id = userId);
                setFarms(data);
            })
    }, []);

    return <div>
        <div>
            <div>
                FirstName: <span>{name}</span>
            </div>
            <div>
                SecondName: <span>{sname}</span>
            </div>
            <div>
                Phone: <span>{phone}</span>
            </div>
            <div>
                Email: <span>{email}</span>
            </div>
        </div>
        <div>
            {farms.map(el => {
                return <FarmItem farm={el} key={el.Id}></FarmItem>
            })}
        </div>
    </div>
};

export default ProfilePage;