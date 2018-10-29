# [Fly-To](https://)
## Eric, Matt, and Kee's First MERN Project 2018

![Alt Text](https://media.giphy.com/media/xjywsFbxJQLwpXB70n/giphy.gif)

## Description
[Fly-To](https://fly-to.wiki) a budget-oriented flight search engine. You can view the world in four different styles (including a halloween theme). Use the Side Navigation Bar to input basic information to get beautiful results of flights around the world.

### Live Version:
[Fly-To](https://fly-to.wiki)

## Technologies

[Fly-To](https://fly-to.wiki) is a MERN Stack Application featuring multiple apis with crossinteractions. CSS3 and JSON for styling. See more details below:

* Backend  - MongoDB/Express
* Frontend  - React/Node.js

#### API Collection:
Skyscanner API 

Google Maps JavaScript API

DarkSky API - In Development Only

---

#### Technical Challenges:
Interacting with multiple APIs and efficiently handling these interactions.
Filtering through different types of data. Sorting results in many forms.

## Favorite Key Features:

### Matt's Top-Picks

#### Holiday Themed Map

Like searching the web in the dark (or light!)? We're not here to judge! In fact, we've given you four beautiful themes to customize the way you search the world of [Fly-To](https://fly-to.wiki). Using seperate JSON files, and some fresh baked code (this doesn't exist anywhere else on the internet), a button switched the style of a google-map-react component. Boom!

![Alt Text](https://media.giphy.com/media/4Ngoj4WmAZcEjgpFgc/giphy.gif)

```js
switchTheme() {
    const themes = ["Future", "Dark", "Light", "Ween"];
    const files = [this.props.futureTheme, this.props.darkTheme, this.props.lightTheme, this.props.weenTheme];
    let i = 0;
    while (true) {
      if (themes[i] === this.state.currentThemeName) {
        this.setState({
          currentTheme: files[(i + 1) % 4],
          currentThemeName: themes[(i+1) % 4]
        });
        break;
      }
      i++;
    }
  }
```
```js
futureTheme: require("./map_future_style.json"),
    weenTheme: require("./map_ween_style.json"),
    lightTheme: require("./map_light_style.json"),
    darkTheme: require("./map_dark_style.json")
```

```js
<GoogleMapReact
            bootstrapURLKeys={{ key: gPI }}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
          options={{
            styles: this.state.currentTheme,
            zoomControlOptions: {
              position: 9,
              style: 1
            },
            mapTypeControlOptions: {
              position: 3
            },
            mapTypeControl: false,
          }}
          >
```

### All of the pins

Easily (well, maybe not too easy) add flight results in the form of pins from an api to google-maps-react component. Cool, yeah?!

![Alt Text](https://media.giphy.com/media/YWoAZOOliTEguDf0xU/giphy.gif)

```js
class Pin extends Component {
  static propTypes = {
    airportName: PropTypes.string,
    doa: PropTypes.string,
    weather: PropTypes.string,
    price: PropTypes.string
  };
```
```js
createPins() {
    let pins = Object.values(this.parseProps(this.props.locations));
      return (
        pins.map((pin, i) => {
              return (
                <Pin
                  key={i}
                  lat={pin.lat}
                  lng={pin.lng}
                  airportName={pin.airportName}
                  doa={pin.doa}
                  weather={pin.weather}
                  price={pin.price} />
              )
        })
      )
  }
```

### Eric's Top-Picks

#### TITLE_OF_FEATURE1

Add a badass description here. Maybe just a sentence or two. Or perhaps three...

<!-- ![Alt Text](make a gif and paste the link here, see examples above) -->

```js
code in here
```
#### TITLE_OF_FEATURE2(optional)

Add a badass description here. Maybe just a sentence or two. Or perhaps three...

<!-- ![Alt Text](make a gif and paste the link here, see examples above) -->

```js
code in here
```



### Kee's Top-Picks

#### TITLE_OF_FEATURE1

Add a badass description here. Maybe just a sentence or two. Or perhaps three...

<!-- ![Alt Text](make a gif and paste the link here, see examples above) -->

```js
code in here
```
#### TITLE_OF_FEATURE2(optional)

Add a badass description here. Maybe just a sentence or two. Or perhaps three...

<!-- ![Alt Text](make a gif and paste the link here, see examples above) -->

```js
code in here
```

# The End?


### Future project direction sorted by priority:

1. Get DarkSky Api to add forccats to pins

2. Polylines between origin and pins

3. 

4. 
