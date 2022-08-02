# Custom rate limit settings

This section introduces the rate limit of the API in GROWI.

## Summary

Limits can be placed on the number of requests within a certain time period for endpoints and request methods.
If the `/GET` method in `/login` has a limit of 10 requests in 60 seconds,
it will return a `419 too many requests` error if more than 11 requests are sent within 60 seconds.
After 60 seconds has elapsed, the request can be sent again.


### For logged-in users

For logged-in users, the key to restrict is a hash value of a string containing the **endpoint**, **request method**, and **user ID**.
Requests from the same IP address can also be distinguished for each user.

### For non-logged-in users

In the case of an un-logged-in user, the key to limit is a hash of a string containing the **endpoint**, **request method**, and **IP address**.
The maximum number of requests is multiplied by the expected number of users per IP address, which defaults to 5 users/ip.
The expected number of users per IP address can be customized for each endpoint and method using environment variables.

## Default Settings


Endpoints are restricted by default in the table below.

| duration(sec) | max requests（times） | Assumed number of people per IP address |
| -------- | ---------------------- | -------------------------- |
| 60       | 500                    | 5                          |


### Endpoints with customized initial values

Other endpoints that require restrictions have customized default values set as restrictions by default, as shown in the table below.

| endpoint            | method | duration(sec) | max requests（times） | Assumed number of people per IP address |
| ------------------------- | -------- | -------- | ---------------------- | -------------------------- |
| /_api/v3/healthcheck      | POST     | 60       | 60                     | 1                          |
| /installer                | POST     | 60       | 5                      | 1                          |
| /login                    | POST     | 60       | 5                      | 100                        |
| /login/activateInvited    | POST     | 60       | 20                     | 5                          |
| /register                 | POST     | 60       | 5                      | 20                         |
| /user-activation/register | POST     | 60       | 5                      | 20                         |
| /_api/login/testLdap      | POST     | 60       | 20                     | 1                          |
| /_api/check_username      | GET      | 60       | 50                     | 5                          |
| /forgot-password/.*       | ALL      | 60       | 5                      | 5                          |
| /user-activation/.*       | GET      | 60       | 5                      | 5                          |
| /attachment/[0-9a-z]{24}  | GET      | 60       | 100                    | 5                          |
| /download/[0-9a-z]{24}    | GET      | 60       | 100                    | 5                          |
| /share/[0-9a-z]{24}       | GET      | 60       | 100                    | 5                          |



## Limit Customization

To override the default restrictions and customize the system, use environment variables to set them.

### Setting Example

``` bash
API_RATE_LIMIT_010_FOO_ENDPOINT=/_api/v3/foo
API_RATE_LIMIT_010_FOO_METHODS=GET,POST
API_RATE_LIMIT_010_FOO_MAX_REQUESTS=10
API_RATE_LIMIT_010_FOO_USERS_PER_IP=2
```

#### Setting items

The following four items are set by environment variables.

- Endpoint (required)
- Request Method
- Maximum number of requests per 60 seconds (required)
- Number of people expected per IP address

Settings other than the request methods are optional. If not set, restrictions are placed on all methods for that endpoint.
The number of people assumed per IP address is set to the default value of 5 if not set.

#### About environment variable key

``` bash
API_RATE_LIMIT_[KEY]_ENDPOINT=/_api/v3/foo
API_RATE_LIMIT_[KEY]_METHODS=GET,POST
API_RATE_LIMIT_[KEY]_MAX_REQUESTS=10
API_RATE_LIMIT_[KEY]_USERS_PER_IP=2
```

Set the environment variable key to a string like the one above.The `[key]` part is an arbitrary string.
However, if a limit is set for the same endpoint, the setting for the key that comes later will take precedence
when the `[key]` part is sorted by the in-place algorithm (JavaScript's sort() method).


### Customize environment variables using regular expressions

``` bash
GET '/62df87c8539c3090b8cc7621' // get page
GET '/share/62e2256f19e932f82eebe830' // ge share page
```

Variable endpoint restrictions, such as those above, can be customized using regular expressions and environment variables.

### Setting Example

``` bash
API_RATE_LIMIT_010_SHARE_ENDPOINT_WITH_REGEXP=/share/[0-9a-z]{24}
API_RATE_LIMIT_010_SHARE_METHODS=GET
API_RATE_LIMIT_010_SHARE_MAX_REQUESTS=20
API_RATE_LIMIT_010_SHARE_USERS_PER_IP=2
```

