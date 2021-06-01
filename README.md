Backend: https://carpooling-deploy.herokuapp.com/

API guild line:
https://docs.google.com/document/d/1CUZ9LA3FoGiBorxiM_OraZHX8MqgyoudVBWtGIbtIdE/edit?usp=sharing

/user/create-coordinate 
Post method
Example:
{
    "type": "destination",
    "name": "Thanh Trì",
    "longitude": 20.934400,  
    "latitude":  105.838511,
    "detour": 1000
}

/user/group/{id}
GET
Example: /user/group/1

/driver/create-group
POST
Example:
{
    "name": "d13",
    "status": "active"
}

/driver/update-group/{groupid}
PUT method
Example:
In URL: /driver/update-group/1
In body: similar to /driver/create-group

/driver/delete-group/{id}
DELETE method
Example: 
/driver/delete-group/1

authenticate
POST

/user/search
GET method

/register-passenger
POST
{
    "username": "p20",
    "password": "p20",
    "e_time_start": "2021-04-18 07:10",
    "l_time_start": "2021-04-20 07:40",
    "email": "d16",
    "date_of_join": "2021-04-19 22:24",
    "last_login_date": "2021-04-21 22:24"
}

/register-driver
POST
{
    "username": "d20",
    "password": "d20",
    "e_time_start": "2021-04-18 07:10",
    "l_time_start": "2021-04-20 07:40",
    "email": "d16",
    "date_of_join": "2021-04-19 22:24",
    "last_login_date": "2021-04-21 22:24"
}

/user
GET
Example: username/d1

 /find-by-toke
GET

/user/delete-user/{id}
DELETE
Example: /user/delete-user/1

/user/allusers
GET

/user/vehicle/{id}
GET
/driver/create-vehicle
POST
{
    "vehicle_type": "motorbike",
    "vehicle_manufacturer": "Wave",
    "seat": 1,
    "license_start_date": "2012-04-18 22:31",
    "license_expire_date": "2030-04-18 22:31"
}

 /user/update-vehicle/{vehicleid}
PUT method
Example:
In URL: /user/update-vehicle/1
In body: similar to driver/create-vehicle

 /user/delete-vehicle/{id}
DELETE method
Example: /user/delete-vehicle/1



