const date = new Date()
const formatted = new Intl.DateTimeFormat('es-ES', {
  timeZone: 'America/Mexico_City',
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  hour12: false
}).format(date).replace(/[/\s:]/g, '')

print(formatted);

