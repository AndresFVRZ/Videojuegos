import { Component } from '@angular/core';


export interface Juego {
    id: number;
    nombre: string;
    requisitos: string;
    precio: string;
    imagen: string;
    enlace: string;
    estado?: string;
}

@Component({
    selector: 'app-requisitos',
    standalone: true,
    imports: [],
    templateUrl: './requisitos.html',
    styleUrls: ['./requisitos.css']
})
export class RequisitosComponent {
    juegos: Juego[] = [
        {
            id: 1,
            nombre: 'Dota 2',
            requisitos: 'Windows 7 / Dual Core 2.8 GHz / 4 GB RAM / GTX 8600 / 15 GB',
            precio: 'Gratis',
            imagen: 'https://cdn.cloudflare.steamstatic.com/steam/apps/570/header.jpg',
            enlace: 'https://store.steampowered.com/app/570/Dota_2/'
        },
        {
            id: 2,
            nombre: 'Counter-Strike 2',
            requisitos: 'Windows 10 / i3-9100 / 8 GB RAM / GTX 1050 / 20 GB',
            precio: 'Gratis',
            imagen: 'https://cdn.cloudflare.steamstatic.com/steam/apps/730/header.jpg',
            enlace: 'https://store.steampowered.com/app/730/CounterStrike_2/'
        },
        {
            id: 3,
            nombre: 'Cyberpunk 2077',
            requisitos: 'Windows 10 / i5-3570K / GTX 780 / 8 GB RAM / 70 GB',
            precio: '199.999 COP',
            imagen: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1091500/header.jpg',
            enlace: 'https://store.steampowered.com/app/1091500/Cyberpunk_2077/'
        },
        {
            id: 4,
            nombre: 'Grand Theft Auto V',
            requisitos: 'Windows 10 / i5-3470 / GTX 660 / 8 GB RAM / 72 GB',
            precio: '124.999 COP',
            imagen: 'https://cdn.cloudflare.steamstatic.com/steam/apps/271590/header.jpg',
            enlace: 'https://store.steampowered.com/app/271590/Grand_Theft_Auto_V/'
        },
        {
            id: 5,
            nombre: 'Elden Ring',
            requisitos: 'Windows 10 / i5-8400 / GTX 1060 / 12 GB RAM / 60 GB',
            precio: '239.999 COP',
            imagen: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1245620/header.jpg',
            enlace: 'https://store.steampowered.com/app/1245620/ELDEN_RING/'
        },
        {
            id: 6,
            nombre: 'Red Dead Redemption 2',
            requisitos: 'Windows 10 / i5-2500K / GTX 770 / 8 GB RAM / 150 GB',
            precio: '249.999 COP',
            imagen: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1174180/header.jpg',
            enlace: 'https://store.steampowered.com/app/1174180/Red_Dead_Redemption_2/'
        },
        {
            id: 7,
            nombre: 'The Witcher 3: Wild Hunt',
            requisitos: 'Windows 10 / i7-3770 / GTX 770 / 8 GB RAM / 50 GB',
            precio: '89.999 COP',
            imagen: 'https://cdn.cloudflare.steamstatic.com/steam/apps/292030/header.jpg',
            enlace: 'https://store.steampowered.com/app/292030/The_Witcher_3_Wild_Hunt/'
        },
        {
            id: 8,
            nombre: 'Doom Eternal',
            requisitos: 'Windows 10 / Ryzen 7 2700X / GTX 1080 / 16 GB RAM / 50 GB',
            precio: '189.999 COP',
            imagen: 'https://cdn.cloudflare.steamstatic.com/steam/apps/782330/header.jpg',
            enlace: 'https://store.steampowered.com/app/782330/DOOM_Eternal/'
        },
        {
            id: 9,
            nombre: 'Assassin\'s Creed Valhalla',
            requisitos: 'Windows 10 / i7-9700K / GTX 1080 / 16 GB RAM / 160 GB',
            precio: '269.999 COP',
            imagen: 'https://cdn.cloudflare.steamstatic.com/steam/apps/2208920/header.jpg',
            enlace: 'https://store.steampowered.com/app/2208920/Assassins_Creed_Valhalla/'
        },
        {
            id: 10,
            nombre: 'Horizon Zero Dawn',
            requisitos: 'i5-2500K, GTX 780, 8 GB RAM, 100 GB SSD',
            precio: '199.999 COP',
            imagen: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1151640/header.jpg',
            enlace: 'https://store.steampowered.com/app/1151640/Horizon_Zero_Dawn_Complete_Edition/'
        },
        {
            id: 11,
            nombre: 'Call of Duty: Modern Warfare III',
            requisitos: 'i7-6700K, RTX 3060, 16 GB RAM, 150 GB SSD',
            precio: '299.999 COP',
            imagen: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1938090/header.jpg',
            enlace: 'https://store.steampowered.com/app/1938090/Call_of_Duty_Modern_Warfare_III/'
        },
        {
            id: 12,
            nombre: 'Resident Evil 4 Remake',
            requisitos: 'Ryzen 3 1200, GTX 1050 Ti, 8 GB RAM, 60 GB SSD',
            precio: '239.999 COP',
            imagen: 'https://cdn.cloudflare.steamstatic.com/steam/apps/2050650/header.jpg',
            enlace: 'https://store.steampowered.com/app/2050650/Resident_Evil_4/'
        },
        {
            id: 13,
            nombre: 'Mortal Kombat 1',
            requisitos: 'i5-8400, GTX 1080, 16 GB RAM, 100 GB SSD',
            precio: '279.999 COP',
            imagen: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1971870/header.jpg',
            enlace: 'https://store.steampowered.com/app/1971870/Mortal_Kombat_1/'
        },
        {
            id: 14,
            nombre: 'Sekiro: Shadows Die Twice',
            requisitos: 'i5-2500K, GTX 970, 8 GB RAM, 25 GB SSD',
            precio: '189.999 COP',
            imagen: 'https://cdn.cloudflare.steamstatic.com/steam/apps/814380/header.jpg',
            enlace: 'https://store.steampowered.com/app/814380/Sekiro_Shadows_Die_Twice/'
        },
        {
            id: 15,
            nombre: 'Battlefield V',
            requisitos: 'i5-6600K, GTX 1050, 8 GB RAM, 50 GB SSD',
            precio: '149.999 COP',
            imagen: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1238810/header.jpg',
            enlace: 'https://store.steampowered.com/app/1238810/Battlefield_V/'
        },
        {
            id: 16,
            nombre: 'Forza Horizon 5',
            requisitos: 'Ryzen 3 1200, GTX 970, 8 GB RAM, 110 GB SSD',
            precio: '249.999 COP',
            imagen: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1551360/header.jpg',
            enlace: 'https://store.steampowered.com/app/1551360/Forza_Horizon_5/'
        },
        {
            id: 17,
            nombre: 'Silent Hill F',
            requisitos: 'Windows 10, i7-8700K, RTX 3060, 16 GB RAM, 80 GB SSD',
            precio: '249.999 COP',
            imagen: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2947440/7e5d923ac622bd1775ebc9b5d4b5b0a24bf5ed40/header.jpg?t=1728772827',
            enlace: 'https://store.steampowered.com/app/2333570/SILENT_HILL_F/',
            estado: 'Nuevo'
        },
        {
            id: 18,
            nombre: 'Dragon Ball: Sparking! ZERO',
            requisitos: 'Windows 10, i5-9600K, RTX 2060, 16 GB RAM, 90 GB SSD',
            precio: '199.999 COP',
            imagen: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1790600/header.jpg',
            enlace: 'https://store.steampowered.com/app/1790600/DRAGON_BALL_Sparking_ZERO/',
            estado: 'Oferta'
        }
    ];

    constructor() {}
}