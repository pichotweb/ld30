function _Image( name, path ) {
    return { name: name, type: "image", src: "data/" + name + ".png" };
}

function _Audio( name ) {
    return { name: name, type: "audio", src: "data/" , channels: 2 };
}

function _Level( name ) {
    return { name: name, type: "tmx", src: "data/" + name + ".tmx" };
}


var GameResources = [
    /* Radmars Logo */
    _Image( "intro_bg" ),
    _Image( "intro_glasses1" ),
    _Image( "intro_glasses2" ),
    _Image( "intro_glasses3" ),
    _Image( "intro_glasses4" ),
    _Image( "intro_mars" ),
    _Image( "intro_radmars1" ),
    _Image( "intro_radmars2" ),
    _Audio( "radmarslogo" ),

    // ui
    _Image("16x16_font"),
    _Image("32x32_font"),

    _Image("soulcharge"),

    _Image("ui_pickup"),
    _Image("ui_pickup2"),
    _Image("summon_gauge_bg"),
    _Image("summon_gauge_fill"),
    _Image("find_gate"),
    _Image("harvest_souls"),

    // Player
    _Image( "zap" ),
    _Image( "player" ),

    _Image( "cat" ),
    _Image( "cat_skel" ),

    _Image( "wasp" ),
    _Image( "wasp_skel" ),

    _Image( "fish" ),
    _Image( "fish_skel" ),

    _Image( "crab" ),
    _Image( "crab_skel" ),

    _Image( "pickup" ),
    _Image( "baddieBullet" ),
    _Image( "waspBullet" ),
    _Image( "doublejump" ),
    _Image( "dembones" ),
    _Image( "explode" ),

    _Image( "win" ),
    _Image( "lose" ),
    _Image( "splash" ),
    _Image( "introcta" ),

    _Image( "paralax_normal1" ),
    _Image( "paralax_underworld1" ),
    //_Audio( "beep", "data/" ),
    _Image( "mapshit1"),
    _Image( "map_normal1"),
    _Image( "map_underworld1"),
    _Image( "collision_tiles" ),
    _Level( "level1" ),
    _Level( "level2" ),
    _Level( "level3" ),
    _Level( "level4" )
];
