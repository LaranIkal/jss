const Files = Java.type('java.nio.file.Files')
const Paths = Java.type('java.nio.file.Paths')
const StandardOpenOption = Java.type('java.nio.file.StandardOpenOption')
const LocalDateTime = Java.type('java.time.LocalDateTime')
const DateTimeFormatter = Java.type('java.time.format.DateTimeFormatter')
const System = Java.type('java.lang.System')

const BaseDirectory = Paths.get( Java.type( 'java.lang.System' ).getProperty( 'user.dir' ) )
const LogFilePath = BaseDirectory.resolve('barcodeutil.log')

const MaxLogSizeBytes = 3 * 1024 * 1024 // If reached, clean log and restart it.

const LogDateFormatter = DateTimeFormatter.ofPattern('yyyy-MM-dd HH:mm:ss')
const ArchiveDateFormatter = DateTimeFormatter.ofPattern('yyyyMMdd_HHmmss')

function Log(message) {
  const line = '[' + LocalDateTime.now().format(LogDateFormatter) + '] ' + message + System.lineSeparator()

  try {
    if( Files.exists( LogFilePath ) && Files.size( LogFilePath ) >= MaxLogSizeBytes )
      Files.deleteIfExists(LogFilePath)

    Files.writeString( LogFilePath, line, StandardOpenOption.CREATE, StandardOpenOption.APPEND )
  } catch (_) { }
}


function RollLogIfNeeded() {
  try {
    if( !Files.exists( LogFilePath ) )
      return

    const size = Files.size( LogFilePath )

    if( size < MaxLogSizeBytes )
    return

    const archiveName = 'BarcodeWatcher_' + LocalDateTime.now().format( ArchiveDateFormatter ) + '.log'

    const archivePath = BaseDirectory.resolve(archiveName)

    Files.move(
            LogFilePath,
            archivePath,
            Java.type('java.nio.file.StandardCopyOption').REPLACE_EXISTING
        );
    } catch (_) {
    }
}


