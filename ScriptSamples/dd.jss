const JobStartTime = (jobStartHour) => {
  const tz = 'America/Mexico_City'

  const now = new Date()

  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: tz,
    year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', hour12: false
  }).formatToParts(now)

  const get = (type) => parseInt(parts.find(p => p.type === type).value)
  const year = get('year'), month = get('month') - 1, day = get('day'), hour = get('hour')

  const todayStart = new Date(Date.UTC(year, month, day, jobStartHour + 6, 0, 0))
  const tomorrowStart = new Date(Date.UTC(year, month, day + 1, jobStartHour + 6, 0, 0))

  const nextStart = hour < jobStartHour ? todayStart : tomorrowStart

  return nextStart.toLocaleString('sv-SE', { timeZone: tz }).replace('T', ' ')
}



const GetNumericDateTime = function() {
 
  // Get current date and time
  const nowDateTime = new Date(); // new Date()) will automatically convert it to the local timezone of the device

  // Get date components
  const year = nowDateTime.getFullYear();
  const month = String(nowDateTime.getMonth() + 1).padStart(2, '0');
  const day = String(nowDateTime.getDate()).padStart(2, '0');

  // Get time components
  const hours = String(nowDateTime.getHours()).padStart(2, '0');
  const minutes = String(nowDateTime.getMinutes()).padStart(2, '0');
  const seconds = String(nowDateTime.getSeconds()).padStart(2, '0');

  // Combine into numeric format YYYYMMDDHHMMSS
  const numericDateTime = `${year}${month}${day}${hours}${minutes}${seconds}`;

  return (numericDateTime)

}


const deviceTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
const GetNumericDateTimeSimplified = () => new Date().toLocaleString('sv-SE', { timeZone: deviceTimeZone })
                                            .replaceAll('-', '').replaceAll(':', '').replaceAll(' ', '').slice(0, 14)


const GetNumericDateTimeSimplifiedTZ = () =>
  new Date().toLocaleString('sv-SE', { timeZone: 'America/Mexico_City' })
    .replaceAll('-', '')
    .replaceAll(':', '')
    .replaceAll(' ', '')
    .slice(0, 14)


const d = new Date(Date.now() + 60000) // dateTimeNowPlus1Min
const pad = (n) => String(n).padStart(2, '0')
const localPlus1Min = d.toLocaleString('sv-SE', { timeZone: 'America/Mexico_City' }).replace('T', ' ')


print("Job Start Time: " + JobStartTime(3)) // start at 3 AM next day

print("GetNumericDateTime: " + GetNumericDateTime())
print("GetNumericDateTimeSimplified: " + GetNumericDateTimeSimplified())


print("Device Time Zone: " + deviceTimeZone)

print("localPlus1Min: " + localPlus1Min)



