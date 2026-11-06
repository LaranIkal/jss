# jss Install and first run 

This guide tells you how to have a working `jss` on Linux and Windows:

---

## 1. Requirements

| Item | Requirement |
|---|---|
| JDK | GraalVM Community JDK 25(https://www.graalvm.org/), minimum version **graalvm-community-25.4.4.1.1+1.1** |
| Files | Files and folders in directory `jss/aworkingjss` |
| Disk space | About 500 MB for the JDK, plus a few MB for jss |

> **Note.** jss needs GraalVM JDK 25(graalvm-community-25.4.4.1.1+1.1) or newer, so older JDKs will not work.
To run jss, you also may use other JDK than GraalVM, like: https://adoptium.net/ JDK 25

---

## 2. Install GraalVM JDK 25

Download GraalVM Community from the official pages:

- Download page: <https://www.graalvm.org/downloads/>
- All releases: <https://github.com/graalvm/graalvm-ce-builds/releases>

Choose the build for your operating system and CPU architecture, version **25.4.4.1.1+1.1 or newer**. The exact file names depend on the release, so check the asset list on the release page.

### Linux

1. Extract the JDK archive into a folder of your choice, for example `~/Apps`:

   ```bash
   mkdir -p ~/Apps
   tar -xzf graalvm-community-jdk-*_linux-x64_bin.tar.gz -C ~/Apps
   ```

   Use the file you downloaded. The name above is an example, and ARM machines use an `aarch64` build( We don't have ARM, your testing is welcome ).

2. Find the extracted folder name and set `JAVA_HOME`. Add these lines to `~/.bashrc` (or `~/.zshrc`), replacing the folder name with the one you actually got, example:

   ```bash
   export JAVA_HOME="$HOME/Apps/graalvm-community-openjdk-25.0.0+0.0"
   export PATH="$JAVA_HOME/bin:$PATH"
   ```

3. Load the new settings:

   ```bash
   source ~/.bashrc
   ```

### Windows

1. Extract the downloaded JDK `.zip` file, for example into `C:\Apps`. You should end up with a folder like `C:\Apps\graalvm-community-openjdk-25.x.x`.

2. Open **Start**, search for **Environment Variables**, and choose **Edit environment variables for your account**.

3. Create a new user variable:(If you are not able to do this, see the note below)

   | Name | Value |
   |---|---|
   | `JAVA_HOME` | `C:\Apps\graalvm-community-openjdk-25.x.x` (your actual folder) |

4. Edit the user variable `Path` and add a new entry: `%JAVA_HOME%\bin`

5. Click OK on all dialogs, then **open a new terminal** so the changes take effect.

### Verify the JDK

Run this in a new terminal:

```text
java -version
```

The output must mention **GraalVM** and version **25**. If it shows another Java version, your `PATH` is picking up a different JDK. Make sure `$JAVA_HOME/bin` (Linux) or `%JAVA_HOME%\bin` (Windows) comes first in `PATH`.

> **Note.** Windows - We have seen some companies block editing the environment variables, if so, after next step, rename folder from graalvm-community-25.4.4.1.1+1.1 to graalvmjdk25, keeping path names simpler, so you will have:

C:\Apps\graalvmjdk25

Edit jss.bat and set line:
- java --enable-native-access=ALL-UNNAMED --sun-misc-unsafe-memory-access=allow -cp jss-1.2.jar;jarlib/* org.jss.jss %JavaScriptFile%
  - to 
- C:\Apps\graalvmjdk25\bin\java --enable-native-access=ALL-UNNAMED --sun-misc-unsafe-memory-access=allow -cp jss-1.2.jar;jarlib/* org.jss.jss %JavaScriptFile%
---

## 3. Install jss.jar and its libraries

jss layout:

```text
jss/
  jarlib/            Library jars, such as JDBC Java libraries.
  scripts/           JavaScript scripts, to keep them organized in a folder
  jss-1.2.jar        The compiled jss
  jss                Linux launcher, using bash
  jss.bat            Windows launcher
```

Extract jss engine and scripts, jss folder, from folder jss/aworkingjss to folder $HOME/Apps on Linux or C:\Apps on Windows

You must have folder: $HOME/Apps/jss or C:\Apps\jss

About jss launcher, it starts Java with the right options and classpath.

| Option                                  | Purpose                                                                       |
|---|---|
| `--enable-native-access=ALL-UNNAMED`    | Allows JLine and GraalVM to use native access without warnings                |
| `--sun-misc-unsafe-memory-access=allow` | Allows libraries that still use `sun.misc.Unsafe` memory access on newer JDKs |
| `-cp jss-1.2.jar:jarlib/*`              | Puts the shell and all libraries on the classpath                             |
| `org.jss.jss`                           | The main class                                                                |


**5. Samples using jss to run some scripts**

Open the file manager and go to the directory where you have the scripts directory, example: ~/Apps/jss/scripts
, right-(mouse)clik on empty space and open a terminal window, and run.

```text
/.../jss/scripts$../jss csv_to_json.jss 
{
  "data": [
    {
      "name": "Alice",
      "age": "30",
      "city": "London"
    },
    {
      "name": "Bob",
      "age": "25",
      "city": "Paris"
    },
    {
      "name": "Charlie",
      "age": "22",
      "city": "Berlin"
    }
  ]
}

```


```text
/.../jss/scripts$../jss csvreader_jdbc.jss 
Connected successfully to: data
Name|Age|City
Alice|30|New York
Bob|25|London
Charlie|35|Tokyo

```

```text
/.../jss/scripts$../jss getweather.jss 
Response Status: 200
{
  "location": {
    "name": "Moor Side",
    "region": "Lincolnshire",
    "country": "United Kingdom",
    "lat": 53.1,
    "lon": -0.142,
    "tz_id": "Europe/London",
    "localtime_epoch": 1793927042,
    "localtime": "2026-11-06 01:04"
  },
  "current": {
    "last_updated_epoch": 1793926800,
    "last_updated": "2026-11-06 01:00",
    "temp_c": 9.8,
    "temp_f": 49.7,
    "is_day": 0,
    "condition": {
      "text": "Overcast",
      "icon": "//cdn.weatherapi.com/weather/64x64/night/122.png",
      "code": 1009
    },
    "wind_mph": 8.3,
    "wind_kph": 13.3,
    "wind_degree": 83,
    "wind_dir": "E",
    "pressure_mb": 1025,
    "pressure_in": 30.28,
    "precip_mm": 0,
    "precip_in": 0,
    "humidity": 70,
    "cloud": 89,
    "feelslike_c": 7.6,
    "feelslike_f": 45.7,
    "windchill_c": 7.9,
    "windchill_f": 46.3,
    "heatindex_c": 9.9,
    "heatindex_f": 49.7,
    "dewpoint_c": 4.7,
    "dewpoint_f": 40.5,
    "vis_km": 10,
    "vis_miles": 6,
    "uv": 0,
    "gust_mph": 11.9,
    "gust_kph": 19.1,
    "will_it_rain": 0,
    "chance_of_rain": 17,
    "will_it_snow": 0,
    "chance_of_snow": 0,
    "wetbulb_c": 7.3,
    "wetbulb_f": 45.2
  }
}


```