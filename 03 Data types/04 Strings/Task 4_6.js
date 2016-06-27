function extractContent(htmlPage) {
    var tags = ['<', '>'],
        inTag = false,
        text = "";

    for (var i = 0; i < htmlPage.length; i++) {
        if (htmlPage[i] == tags[0]) {
            inTag = true;
        }
        if (htmlPage[i] == tags[1]) {
            inTag = false;
            continue;
        }

        if (!inTag) {
            text += htmlPage[i];
        }
    }

    return text;
}

var htmlPage = "<!DOCTYPE html><html><head><title>Sample site</title></head><body><div>text<div>more text</div>and more...</div>in body</body></html>";
document.write(extractContent(htmlPage));