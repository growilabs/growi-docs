# Custom rate limit settings

This section introduces the rate limit of the API in GROWI.

## Summary

The maximum number of requests that are allowed per rate limit window (second) can be set per endpoint and per user (IP for guest users).
The rate limit window is 60 seconds and has a fixed value.
If more than the maximum number of requests that are allowed are received by the same user within the rate-limit window, an error `419 too many requests` is returned.


### For logged-in users

For logged-in users, the key to identifying the user is a hash value of a string containing the **endpoint**, **request method**, and **user ID**.
Requests from the same IP address can also be distinguished for each user.

### For non-logged-in users

For non-logged-in users, the key to identifying the user is a hash value of a string containing the **endpoint**, **request method**, and **IP address**.
At this time, the maximum number of requests that are allowed is multiplied by the expected number of people per IP address.
The default number of people assumed per IP address is 5 people/IP.
The number of people assumed per IP address can be customized for each endpoint and method using environment variables.

## Default Settings


Endpoints are restricted by default in the table below.

| window(sec) | max requests(times) | Assumed number of people per IP address |
| -------- | ---------------------- | -------------------------- |
| 60       | 500                    | 5                          |


### Endpoints with customized initial values

Other endpoints that require restrictions have default customized initial values set as restrictions by the following configuration file.

<https://github.com/weseek/growi/blob/master/packages/app/config/rate-limiter.ts>

## Limit Customization

To override the default restrictions and customize the system, use environment variables to set them.

### Setting Example

The following four items are set by environment variables.

- Endpoint (required)
- request methods
- Maximum number of requests per rate-limit window (required)
- Assumed number of people per IP address

You can set environment variables as shown below.

``` bash
API_RATE_LIMIT_[KEY]_ENDPOINT=/_api/v3/foo // Endpoint
API_RATE_LIMIT_[KEY]_METHODS=GET,POST // request methods
API_RATE_LIMIT_[KEY]_MAX_REQUESTS=10 // Maximum number of requests per rate-limit window
API_RATE_LIMIT_[KEY]_USERS_PER_IP=2 // Assumed number of people per IP address
```

Settings other than the request method are optional.
If not set, restrictions are placed on all methods for that endpoint.
The number of people assumed per IP address is set to the default value of 5 if not set.

The `[key]` part is an arbitrary string.
However, if a limit is set for the same endpoint, the setting for the key that comes later will take precedence
when the `[key]` part is sorted by the in-place algorithm (JavaScript's sort() method).

``` bash
API_RATE_LIMIT_010_FOO_ENDPOINT=/_api/v3/foo
API_RATE_LIMIT_010_FOO_METHODS=GET,POST
API_RATE_LIMIT_010_FOO_MAX_REQUESTS=10
API_RATE_LIMIT_010_FOO_USERS_PER_IP=2
```

When environment variables are set in this manner, the following restrictions apply

- For logged-in users

If you send more than 11 `GET` or `POST` requests in 60 seconds to the endpoint `/_api/v3/foo`,
an error will occur and you will not be able to send requests after the 11th request.
After 60 seconds have elapsed, the request can be sent again.

- For non-logged-in users

If you send more than 21 `GET` or `POST` requests from the same IP address to the endpoint `/_api/v3/foo`,
an error will occur and you will not be able to send requests after the 21st request.
After 60 seconds have elapsed, the request can be sent again.


### Customize environment variables using regular expressions

``` bash
GET '/62df87c8539c3090b8cc7621' // get page
GET '/share/62e2256f19e932f82eebe830' // get share page
```

Variable endpoint restrictions, such as those above, can be customized using regular expressions and environment variables.

### Setting Example

``` bash
API_RATE_LIMIT_010_SHARE_ENDPOINT_WITH_REGEXP=/share/[0-9a-z]{24}
API_RATE_LIMIT_010_SHARE_METHODS=GET
API_RATE_LIMIT_010_SHARE_MAX_REQUESTS=20
API_RATE_LIMIT_010_SHARE_USERS_PER_IP=2
```
