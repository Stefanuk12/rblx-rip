// Dependencies
import * as fs from 'fs';
import * as stream from 'stream';
import got, { Got } from 'got';
import { promisify } from 'util';
const config = require("./config.json");

// RRip class
export class RRip {
    // Vars
    static outDir: string;
    private static HttpClient: Got;
    static download: Function;
    pipeline: any = promisify(stream.pipeline);
    
    // Create a directory
    private createDir(dir: string){
        if (!fs.existsSync(dir)) {
            try {
                fs.mkdirSync(dir);
            } catch(error){
                console.error(error);
            }
        }
    }

    // Constructor
    constructor(outDir: string = "./assets"){
        RRip.outDir = outDir;

        // Making the export directory
        this.createDir(outDir);
        
        // Creating all sub directories
        for (var [key, value] of Object.entries(config)){
            this.createDir(`${outDir}/${key}`);
        }

        // HTTP Client
        RRip.HttpClient = got.extend({
            prefixUrl: "https://assetdelivery.roblox.com/v1",
            headers: {
                "User-Agent": "Roblox/WinInet"
            }
        });
    }

    // Get directory
    private getDir(type: string, foldername: string | number){
        return `${RRip.outDir}/${type}/${foldername}`;
    }

    // Download an audio
    async audio(id: number){
        // Vars
        const directory = this.getDir("audio", id);
        this.createDir(directory);
        
        // Pipeline
        await this.pipeline(
            RRip.HttpClient.stream("asset", {searchParams: {id: id}}), // Get the file
            fs.createWriteStream(`${directory}/${id}.mp3`) // Write it
        )
    }

    // Download a shirt
    async shirt(id: number){
        // Vars
        const directory = this.getDir("shirt", id);
        this.createDir(directory);
        
        // Get the response
        const response = await RRip.HttpClient("asset", {searchParams: {id: id}});

        // Getting the correct id
        const newId = response.body.split("url").join().split("</url>").join().split(",")[1].replace(/\D/g, '');

        // Downloading and writing
        await this.pipeline(
            RRip.HttpClient.stream("asset", {searchParams: {id: newId}}), // Get the file
            fs.createWriteStream(`${directory}/${id}.png`) // Write it
        )
    }

    // Download pants
    async pants(id: number){
        // Vars
        const directory = this.getDir("pants", id);
        this.createDir(directory);
        
        // Get the response
        const response = await RRip.HttpClient("asset", {searchParams: {id: id}});

        // Getting the correct id
        const newId = response.body.split("url").join().split("</url>").join().split(",")[1].replace(/\D/g, '');

        // Downloading and writing
        await this.pipeline(
            RRip.HttpClient.stream("asset", {searchParams: {id: newId}}), // Get the file
            fs.createWriteStream(`${directory}/${id}.png`) // Write it
        )
    }

    // Download tshirt
    async tshirt(id: number){
        // Vars
        const directory = this.getDir("tshirt", id);
        this.createDir(directory);
        
        // Get the response
        const response = await RRip.HttpClient("asset", {searchParams: {id: id}});

        // Getting the correct id
        const newId = response.body.split("url").join().split("</url>").join().split(",")[1].replace(/\D/g, '');

        // Downloading and writing
        await this.pipeline(
            RRip.HttpClient.stream("asset", {searchParams: {id: newId}}), // Get the file
            fs.createWriteStream(`${directory}/${id}.png`) // Write it
        )
    }

    // Downlaod a face
    async face(id: number){
        // Vars
        const directory = this.getDir("face", id);
        this.createDir(directory);
        
        // Get the response
        const response = await RRip.HttpClient("asset", {searchParams: {id: id}});

        // Getting the correct id
        const newId = response.body.split("url").join().split("</url>").join().split(",")[1].replace(/\D/g, '');

        // Downloading and writing
        await this.pipeline(
            RRip.HttpClient.stream("asset", {searchParams: {id: newId}}), // Get the file
            fs.createWriteStream(`${directory}/${id}.png`) // Write it
        )
    }

    // Download a decal
    async decal(id: number){
        // Vars
        const directory = this.getDir("decal", id);
        this.createDir(directory);
        
        // Get the response
        const response = await RRip.HttpClient("asset", {searchParams: {id: id}});

        // Getting the correct id
        const newId = response.body.split("url").join().split("</url>").join().split(",")[1].replace(/\D/g, '');

        // Downloading and writing
        await this.pipeline(
            RRip.HttpClient.stream("asset", {searchParams: {id: newId}}), // Get the file
            fs.createWriteStream(`${directory}/${id}.png`) // Write it
        )
    }

    // Download a hat
    async hat(id: number){
        // Vars
        const directory = this.getDir("hat", id);
        this.createDir(directory);
                
        // Pipeline
        await this.pipeline(
            RRip.HttpClient.stream("asset", {searchParams: {id: id}}), // Get the file
            fs.createWriteStream(`${directory}/${id}.rbxm`) // Write it
        )
    }

    // Download a mesh
    async mesh(id: number){
        // Vars
        const directory = this.getDir("mesh", id);
        this.createDir(directory);
        
        // Get the response
        const response = await RRip.HttpClient("asset", {searchParams: {id: id}});

        // Getting the correct id
        const newId = response.body.split("url").join().split("</url>").join().split(",")[1].replace(/\D/g, '');

        // Downloading and writing
        await this.pipeline(
            RRip.HttpClient.stream("asset", {searchParams: {id: newId}}), // Get the file
            fs.createWriteStream(`${directory}/${id}.obj`) // Write it
        )
    }

    // Download a plugin
    async plugin(id: number){
        // Vars
        const directory = this.getDir("plugin", id);
        this.createDir(directory);
        
        await this.pipeline(
            RRip.HttpClient.stream("asset", {searchParams: {id: id}}), // Get the file
            fs.createWriteStream(`${directory}/${id}.rbxm`) // Write it
        )
    }

    // Download an emote
    async emote(id: number){
        // Vars
        const directory = this.getDir("emote", id);
        this.createDir(directory);
                
        // Pipeline
        await this.pipeline(
            RRip.HttpClient.stream("asset", {searchParams: {id: id}}), // Get the file
            fs.createWriteStream(`${directory}/${id}.rbxm`) // Write it
        )
    }

    // Download a gear
    async gear(id: number){
        // Vars
        const directory = this.getDir("gear", id);
        this.createDir(directory);
                
        // Pipeline
        await this.pipeline(
            RRip.HttpClient.stream("asset", {searchParams: {id: id}}), // Get the file
            fs.createWriteStream(`${directory}/${id}.rbxm`) // Write it
        )
    }

    // Download a body part
    async bodyPart(id: number){
        // Vars
        const directory = this.getDir("bodyPart", id);
        this.createDir(directory);
                
        // Pipeline
        await this.pipeline(
            RRip.HttpClient.stream("asset", {searchParams: {id: id}}), // Get the file
            fs.createWriteStream(`${directory}/${id}.rbxm`) // Write it
        )
    }

    // Download an animation
    async animation(id: number){
        // Vars
        const directory = this.getDir("animation", id);
        this.createDir(directory);
                
        // Pipeline
        await this.pipeline(
            RRip.HttpClient.stream("asset", {searchParams: {id: id}}), // Get the file
            fs.createWriteStream(`${directory}/${id}.rbxm`) // Write it
        )
    }

    // Download a place
    async place(id: number){
        // Vars
        const directory = this.getDir("place", id);
        this.createDir(directory);
                
        // Pipeline
        await this.pipeline(
            RRip.HttpClient.stream("asset", {searchParams: {id: id}}), // Get the file
            fs.createWriteStream(`${directory}/${id}.rbxl`) // Write it
        )
    }

    // Download a video
    async video(id: number){
        // Vars
        const directory = this.getDir("video", id);
        this.createDir(directory);
                
        // Pipeline
        await this.pipeline(
            RRip.HttpClient.stream("asset", {searchParams: {id: id}}), // Get the file
            fs.createWriteStream(`${directory}/${id}.webm`) // Write it
        )
    }

    // Download gear resources
    async gearResources(id: number){
        // Vars
        const directory = this.getDir("gearResources", id);
        this.createDir(directory);
        
        const response = await RRip.HttpClient("asset", {searchParams: {id: id}});
        
        // Getting mesh and texture id
        const meshId = response.body.split(/<Content name="TextureId"><url>http:\/\/www.roblox.com\/asset\/\?id=([0-9]+)/);
        var textureId = /TextureId.*?rbxassetid:\/\/([0-9]+)/.exec(response.body);

        // Downloading mesh
        if (meshId != null){
            await this.pipeline(
                RRip.HttpClient.stream("assets", {searchParams: {id: meshId[1]}}), // Get the file
                fs.createWriteStream(`${directory}/${id}.obj`) // Write it
            );
        }

        // Downloading texture
        if (textureId != null){
            await this.pipeline(
                RRip.HttpClient.stream("asset", {searchParams: {id: textureId[3]}}), // Get the file
                fs.createWriteStream(`${directory}/${id}.png`) // Write it
            );
        }
    }

    // Download hat resources
    async hatResources(id: number){
        // Vars
        const directory = this.getDir("hatResources", id);
        this.createDir(directory);
        
        // Get response
        const response = await RRip.HttpClient("asset", {searchParams: {id: id}});

        // Getting mesh and texture id
        const meshId = /MeshId.*?rbxassetid:\/\/([0-9]+)/.exec(response.body);
        var textureId = /TextureId.*?rbxassetid:\/\/([0-9]+)/.exec(response.body);
        if (textureId == null){
            textureId = /http:\/\/www.roblox.com\/asset\/\?id=([0-9]+)/.exec(response.body);
        }

        // Downloading mesh
        if (meshId != null){
            await this.pipeline(
                RRip.HttpClient.stream("asset", {searchParams: {id: meshId[1]}}), // Get the file
                fs.createWriteStream(`${directory}/${id}.obj`) // Write it
            );
        }

        // Downloading texture
        if (textureId != null){
            await this.pipeline(
                RRip.HttpClient.stream("asset", {searchParams: {id: textureId[1]}}), // Get the file
                fs.createWriteStream(`${directory}/${id}.png`) // Write it
            );
        }
    }

    // Test if everything is working
    async test(){
        const _RRip = new RRip();
        for (var [key, value] of Object.entries(config)){           
            eval(`if (_RRip.${key} != undefined) {_RRip.${key}(${value})}`);
        }
    }
}