var names = ["Silas", "Jaylon", "Chris", "Theo", "Stefon"];
var weapons = ["AK-47", "UZI", "Super Soaker", "Draco", "Sword", "Blade", "C-4", "Gernade", "Large Water Ballon", "SCAR Rifle", "Poison gas", "Guard Dogs", "Energy Sword", "Sub-Zero Blade", "Rare bug", "Ray-gun", "Music", "I Have no idea", "Too many Weapons", "Mini rifle"];
var locations = ["Gamestop", "Innovation Depot", "Planet Fitness", "Wanye's World", "Delfino Plaza", "Dallas", "Atlanta", "In My Mind", "My Dreams", "My Bag"];

$(document).ready(function () {
    for (var i = 0; i < 100; i++) {
        var h3 = $('<h3> Accusation ' + (i + 1) + '</h3>');
        $(document.body).append(h3);
        var trigger = randomAlert(i);
        h3.click(trigger);
    }
    function randomAlert(num) {
        return function () {
            var name = Math.floor(Math.random() * names.length);
            var location = Math.floor(Math.random() * locations.length);
            var weapon = Math.floor(Math.random() * weapons.length);
            alert('I accuse ' + names[name] + ' with the ' + weapons[weapon] + ' in the ' + locations[location] + '!');
        }
    }
});