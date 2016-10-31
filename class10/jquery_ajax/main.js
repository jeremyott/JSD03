
var resultsPlaceholder = $('#results');
var albumCovers = "";

var addAlbumsToPage = function ( albums) {
    // enter code here
    // should create for each album
    // '<div style="background-image:url('image_url')" class="cover"></div>'
    resultsPlaceholder.append(albumCovers);
}


var searchAlbums = function (query) {
    $.ajax({
        url: "https://api.spotify.com/v1/search",
        data: {
            q: query,
            type: 'album'
        },
        success: function (response) {
            addAlbumsToPage("//enter code here");
        }
    });
};

$('#search-form').on('submit', function (e) {
    e.preventDefault();
    searchAlbums($('#query').val());
});
