#  Le Bite - Gallery - CRUD API 

**GALLERY API SPECS**

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
    "image_id": <number>,
    "metadata": {
      "creationDate": <date>,
      "user_id": <string>,
      "isDiner": <boolean>,
    },
    "snippet": {
      "sizes": {
        "original": {
          "url": <string>,
          "width": <number>,
          "height": <number>,
        },
        "medium": {
          "url": <string>,
          "width": <number>,
          "height": <number>,
        },
        "large": {
          "url": <string>,
          "width": <number>,
          "height": <number>,
        },
        "wide-huge": {
          "url": <string>,
          "width": <number>,
          "height": <number>,
        },
      },
    }
  },
  ...
]
```

_If `restaurant_id` is not found in database, return:_

**Code:** 404

**Message:** Restaurant not found

`POST /:restaurant_id/photos`

**INPUT**: 

JSON new restaurant photo data

```
{
  "restaurant_id": <number>,
  "image_id": <number>,
  "metadata": {
    "creationDate": <date>,
    "user_id": <string>,
    "isDiner": <boolean>,
  },
  "snippet": {
    "sizes": {
      "original": {
        "url": <string>,
        "width": <number>,
        "height": <number>,
      },
    },
  }
}
```

**OUTPUT**: 

_If post is successful, return:_

**Code:** 201 

**Message:** OK

_If post is not successful, return:_

**Code:** 400

**Message:** BAD REQUEST 

`DELETE /:restaurant_id/photos/:image_id`

**INPUT:** 

`restaurant_id` and `image_id` identifies which photo to delete from restaurant's gallery

**OUTPUT:** 

_If delete is successful, return:_

**Code:** 200

**Message:** OK

_If post is not successful, return:_ 

**Code:** 404
**Message:** NOT FOUND  

`PUT /:restaurant_id/photos/:image_id`

**INPUT:**: `restaurant_id`, `image_id` and new photo JSON data

```
{
  "restaurant_id": <number>,
  "image_id": <number>,
  "metadata": {
    "creationDate": <date>,
    "user_id": <string>,
    "isDiner": <boolean>,
  },
  "snippet": {
    "sizes": {
      "original": {
        "url": <string>,
        "width": <number>,
        "height": <number>,
      },
    },
  }
}
```

**OUTPUT:** 

_If put is successful, return:_

**Code:** 200

_If put is not successful, return:_
 
**Code:** 400

`PATCH /:restaurant_id/photos/:image_id`

**INPUT:**: `restaurant_id`, `image_id` and new photo JSON data

```
{
  "restaurant_id": <number>,
  "image_id": <number>,
  "metadata": {
    "creationDate": <date>,
    "user_id": <string>,
    "isDiner": <boolean>,
  },
  "snippet": {
    "sizes": {
      "original": {
        "url": <string>,
        "width": <number>,
        "height": <number>,
      },
    },
  }
}
```

**OUTPUT:** 

_If put is successful, return:_

**Code:** 200

_If put is not successful, return:_
 
**Code:** 400
