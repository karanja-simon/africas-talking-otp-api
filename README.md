
# AfricasTalkingOTP-Api

One Time Pasword (OTP) code generation using otplib and AfricasTalking SMS gateway.
## Getting Started
You will need to register for an API key on the AfricasTalking portal [AfricasTalking](https://africastalking.com/). Update ```/src/config/config.json```
with your values.

### Prerequisites

Node version 6 and above.

### Installing

Git clone (https://github.com/karanja-simon/AfricasTalkingOTP-Api.git). 
Run 
```
npm install 
npm run watch-ts
npm run watch-node
```
You can use PostMan or Curl to hit the following endpoints

| Resource   |      Action     |  Summary |
|----------|:-------------:|------:|
| /api/v1/otp |  POST| Generate an OTP code and send it to provided No. |
| /api/v1/otp/verify |    POST   |   Check OTP code validity |
| /api/v1/otp/time/elapsed |    GET | Get elapsed time since the OTP was generated
| /api/v1/otp/time/remaining |    GET | Get time remainging until the OTP expires

## Example (Generate OTP)

```curl
curl -X POST \
  http://localhost:3000/api/v1/otp \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Postman-Token: 42809ea9-8894-4b29-9d5a-028523fe4dea' \
  -H 'cache-control: no-cache' \
  -d phoneNo=071XXXXXX
```

## Example (Verify OTP)

```curl
curl -X POST \
  http://localhost:3000/api/v1/otp/verify \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Postman-Token: ea77fe0e-d8a7-470f-a52f-a8c33e8fd2c3' \
  -H 'cache-control: no-cache' \
  -d otpCode=251862

```


## Built With

* [Express](https://expressjs.com/) - Express
* [AfricasTalking](https://africastalking.com/) - Used to generate RSS Feeds


## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 

## Authors

* **Simon.K** - *Initial work* 

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Margret Kibe
