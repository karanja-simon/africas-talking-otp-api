
# AfricasTalkingOTP-Api

One Time Pasword (OTP) code generation using otplib and AfricasTalking SMS gateway.
## Getting Started
You will need to register for an API key on the AfricasTalking portal [AfricasTalking](https://africastalking.com/). Update ```/src/config/congi.json```
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

```
Give the example
```

And repeat

```
until finished
```

End with an example of getting some data out of the system or using it for a little demo



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
