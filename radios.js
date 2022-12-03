const ap1 = new APlayer({  // ap1
    container: document.getElementById('playerlist'),
    mini: false,
    autoplay: false,
    theme: '#9fc5e8',  // will be overridden if music color is set
    loop: 'all',
    order: 'list',
    preload: 'auto',
    volume: 0.7,
    mutex: true,
    listFolded: false,
    audio: [
        {
            name: '730 AM',
            artist: 'ABC',
            url: 'https://media.streambrothers.com:8342/stream',
            cover: 'https://www.abc.com.py/pf/resources/images/OG-Image-ABC-Cardinal.png?d=1269',
            theme: '#ebd0c2'
        },
        {
            name: '101.3',
            artist: 'Radio Farra',
            url: 'https://rfs1.farra.com.py:9433/stream',
            cover: 'https://scontent.fasu2-1.fna.fbcdn.net/v/t39.30808-6/297459415_5446091778782476_6830658072817960647_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=b-h52X6JRGoAX-gfTCe&_nc_ht=scontent.fasu2-1.fna&oh=00_AfDJrWl4ZbuSbtkYGHNQKffGReFdHB7Jfi9UNIuhuKx5lg&oe=63903158',
            theme: '#46718b'
        },
        {
            name: '95.1 FM',
            artist: 'Nacional Paraguay',
            url: 'http://audio2.radionacional.gov.py:8084/951fm',
            cover: 'https://play-lh.googleusercontent.com/CD64TECuyFHvi12Ejbui9EfnbHAnrmkkA_GmJOZfHbpW25ZDrwiKgUVzPKrnqJTfpJo',
            theme: '#ebd0c2'
        }
    ]    	// remember to close the bracket
});