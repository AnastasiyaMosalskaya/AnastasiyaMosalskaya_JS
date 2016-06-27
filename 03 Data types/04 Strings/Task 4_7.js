var url = 'http://www.tut.by/forum/index.php';
function parseURL(url) {
	var ref = {};
	ref.protocol = url.slice(0, url.indexOf(':'));
	ref.server = url.slice(url.indexOf(':') + 3, url.indexOf('/', url.indexOf(':') + 3));
	ref.resource = url.slice(url.indexOf('/', url.indexOf(':') + 3));
  	return "{ </br>protocol: \"" + ref.protocol + "\",</br>server: \"" + ref.server + "\",</br>resource: \"" + ref.resource + "\"</br>}";
}

document.write(parseURL(url));
