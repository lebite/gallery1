#  Le Bite - Gallery - CRUD API

## API

| HTTP Method   | Endpoint                         | Description              |
|:--------------|:---------------------------------|:-------------------------|
| GET           | /:restaurant_id/photos           | Fetch photos             |
| POST          | /:restaurant_id/photos           | Insert a new photo       |
| DELETE        | /:restaurant_id/photos/:image_id | Delete a photo           |
| PUT           | /:restaurant_id/photos/:image_id | Replace a photo          |
| PATCH         | /:restaurant_id/photos/:image_id | Update a photo           |

## API Options
1. [GET (fetch)](#Fetch)
1. [POST (insert)](#Insert)
1. [DELETE](#Delete)
1. [PUT (replace)](#Replace)
1. [PATCH (update)](#Update)
---
## Fetch
`GET /:restaurant_id/photos/`

**INPUT**: 

`restaurant_id` identifies which restaurant's images to fetch

**OUTPUT**:

_If `restaurant_id` is found in database, return:_ 

**Code:** 200

**Content:** JSON of current restaurant's image data:

```
[
  {
    "restaurant_id": <number>,
    "owner_generated": <boolean>,
    "creationDate": <date>,
    "image_id": <number>,
    "user_id": <string>,
    "url_original": <string>,
    "url_mobile": <string>,
  },
  ...
]
```

_If `restaurant_id` is not found in database, return:_

**Code:** 404

[resource does not exist]: #

**Message:** RESTAURANT NOT FOUND

_If endpoint is not recognized by the server, return:_

**Code:** 400

[server doesn't recognize endpoint (incorrect request syntax) ]: #

**Message:** INVALID REQUEST


---
## Insert
`POST /:restaurant_id/photos`

**INPUT**: 

JSON new restaurant photo data

```
{
  "restaurant_id": <number>,
  "owner_generated": <boolean>,
  "creationDate": <date>,
  "image_id": <number>,
  "user_id": <string>,
  "url_original": <string>,
  "url_mobile": <string>,
}
```

**OUTPUT**: 

_If post is successful, return:_

**Code:** 201 
**Message:** OK

_If post is not successful, return:_

**Code:** 400
**Message:** INVALID REQUEST

---
## Delete
`DELETE /:restaurant_id/photos/:image_id`

**INPUT:** 

`restaurant_id` and `image_id` identifies which photo to delete from restaurant's gallery

**OUTPUT:** 

_If delete is successful, return:_

**Code:** 200
**Message:** OK

_If delete is not successful, return:_ 

**Code:** 404
**Message:** RESOURCE NOT FOUND  
---
## Replace
`PUT /:restaurant_id/photos/:image_id`

**INPUT:**: `restaurant_id`, `image_id` and new photo JSON data

```
{
  "restaurant_id": <number>,
  "owner_generated": <boolean>,
  "creationDate": <date>,
  "image_id": <number>,
  "user_id": <string>,
  "url_original": <string>,
  "url_mobile": <string>,
}
```

**OUTPUT:** 

_If put is successful, return:_

**Code:** 200
**Message:** OK

_If put is not successful, return:_
 
**Code:** 400
**Message:** INVALID REQUEST

---
## Update
`PATCH /:restaurant_id/photos/:image_id`

**INPUT:**: `restaurant_id`, `image_id` and new photo JSON data

```
{
  "restaurant_id": <number>,
  "owner_generated": <boolean>,
  "creationDate": <date>,
  "image_id": <number>,
  "user_id": <string>,
  "url_original": <string>,
  "url_mobile": <string>,
}
```

**OUTPUT:** 

_If put is successful, return:_

**Code:** 200

_If put is not successful, return:_
 
**Code:** 400
