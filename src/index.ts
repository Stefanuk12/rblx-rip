// Dependencies
import * as fs from 'fs';
import * as stream from 'stream';
import got, { Got } from 'got';
import { promisify } from 'util';

// RRip class
export class RRip {
    // Vars
    static outDir: string;
    private static HttpClient: Got;
    static download: Function;
    pipeline: any = promisify(stream.pipeline);
    
    // Constructor
    constructor(outDir: string = "./assets"){
        RRip.outDir = outDir;

        // Making the export directory
        if (!fs.existsSync(outDir)) {
            try {
                fs.mkdirSync(outDir);
            } catch(error){
                console.error(error);
            }
        }

        // HTTP Client
        RRip.HttpClient = got.extend({
            prefixUrl: "https://assetdelivery.roblox.com/v1",
            headers: {
                "User-Agent": "Roblox/WinInet"
            }
        });
    }

    // Download an audio
    async audio(id: number){
        await this.pipeline(
            RRip.HttpClient.stream("asset", {searchParams: {id: id}}), // Get the file
            fs.createWriteStream(`./${RRip.outDir}/${id}.mp3`) // Write it
        )
    }

    // Download a shirt
    async shirt(id: number){
        // Get the response
        const response = await RRip.HttpClient("asset", {searchParams: {id: id}});

        // Getting the correct id
        const newId = response.body.split("url").join().split("</url>").join().split(",")[1].replace(/\D/g, '');

        // Downloading and writing
        await this.pipeline(
            RRip.HttpClient.stream("asset", {searchParams: {id: newId}}), // Get the file
            fs.createWriteStream(`./${RRip.outDir}/${id}.png`) // Write it
        )
    }

    // Download pants
    async pants(id: number){
        // Get the response
        const response = await RRip.HttpClient("asset", {searchParams: {id: id}});

        // Getting the correct id
        const newId = response.body.split("url").join().split("</url>").join().split(",")[1].replace(/\D/g, '');

        // Downloading and writing
        await this.pipeline(
            RRip.HttpClient.stream("asset", {searchParams: {id: newId}}), // Get the file
            fs.createWriteStream(`./${RRip.outDir}/${id}.png`) // Write it
        )
    }

    // Download tshirt
    async tshirt(id: number){
        // Get the response
        const response = await RRip.HttpClient("asset", {searchParams: {id: id}});

        // Getting the correct id
        const newId = response.body.split("url").join().split("</url>").join().split(",")[1].replace(/\D/g, '');

        // Downloading and writing
        await this.pipeline(
            RRip.HttpClient.stream("asset", {searchParams: {id: newId}}), // Get the file
            fs.createWriteStream(`./${RRip.outDir}/${id}.png`) // Write it
        )
    }

    // Downlaod a face
    async face(id: number){
        // Get the response
        const response = await RRip.HttpClient("asset", {searchParams: {id: id}});

        // Getting the correct id
        const newId = response.body.split("url").join().split("</url>").join().split(",")[1].replace(/\D/g, '');

        // Downloading and writing
        await this.pipeline(
            RRip.HttpClient.stream("asset", {searchParams: {id: newId}}), // Get the file
            fs.createWriteStream(`./${RRip.outDir}/${id}.png`) // Write it
        )
    }

    // Download a decal
    async decal(id: number){
        // Get the response
        const response = await RRip.HttpClient("asset", {searchParams: {id: id}});

        // Getting the correct id
        const newId = response.body.split("url").join().split("</url>").join().split(",")[1].replace(/\D/g, '');

        // Downloading and writing
        await this.pipeline(
            RRip.HttpClient.stream("asset", {searchParams: {id: newId}}), // Get the file
            fs.createWriteStream(`./${RRip.outDir}/${id}.png`) // Write it
        )
    }

    // Download a hat
    async hat(id: number){
        await this.pipeline(
            RRip.HttpClient.stream("asset", {searchParams: {id: id}}), // Get the file
            fs.createWriteStream(`./${RRip.outDir}/${id}.rbxm`) // Write it
        )
    }

    // Download a mesh
    async mesh(id: number){
        // Get the response
        const response = await RRip.HttpClient("asset", {searchParams: {id: id}});

        // Getting the correct id
        const newId = response.body.split("url").join().split("</url>").join().split(",")[1].replace(/\D/g, '');

        // Downloading and writing
        await this.pipeline(
            RRip.HttpClient.stream("asset", {searchParams: {id: newId}}), // Get the file
            fs.createWriteStream(`./${RRip.outDir}/${id}.obj`) // Write it
        )
    }

    // Download a plugin
    async plugin(id: number){
        await this.pipeline(
            RRip.HttpClient.stream("asset", {searchParams: {id: id}}), // Get the file
            fs.createWriteStream(`./${RRip.outDir}/${id}.rbxm`) // Write it
        )
    }

    // Download an emote
    async emote(id: number){
        await this.pipeline(
            RRip.HttpClient.stream("asset", {searchParams: {id: id}}), // Get the file
            fs.createWriteStream(`./${RRip.outDir}/${id}.rbxm`) // Write it
        )
    }

    // Download a gear
    async gear(id: number){
        await this.pipeline(
            RRip.HttpClient.stream("asset", {searchParams: {id: id}}), // Get the file
            fs.createWriteStream(`./${RRip.outDir}/${id}.rbxm`) // Write it
        )
    }

    // Download a body part
    async bodyPart(id: number){
        await this.pipeline(
            RRip.HttpClient.stream("asset", {searchParams: {id: id}}), // Get the file
            fs.createWriteStream(`./${RRip.outDir}/${id}.rbxm`) // Write it
        )
    }

    // Download an animation
    async animation(id: number){
        await this.pipeline(
            RRip.HttpClient.stream("asset", {searchParams: {id: id}}), // Get the file
            fs.createWriteStream(`./${RRip.outDir}/${id}.rbxm`) // Write it
        )
    }

    // Download a place
    async place(id: number){
        await this.pipeline(
            RRip.HttpClient.stream("asset", {searchParams: {id: id}}), // Get the file
            fs.createWriteStream(`./${RRip.outDir}/${id}.rbxl`) // Write it
        )
    }

    // Download a video
    async video(id: number){
        await this.pipeline(
            RRip.HttpClient.stream("asset", {searchParams: {id: id}}), // Get the file
            fs.createWriteStream(`./${RRip.outDir}/${id}.webm`) // Write it
        )
    }

    // Download gear resources
    async gearResources(id: number){
        const response = await RRip.HttpClient("asset", {searchParams: {id: id}});
        
        // Getting mesh and texture id
        const meshId = response.body.split(/<Content name="TextureId"><url>http:\/\/www.roblox.com\/asset\/\?id=([0-9]+)/);
        var textureId = /TextureId.*?rbxassetid:\/\/([0-9]+)/.exec(response.body);

        // Downloading mesh
        if (meshId != null){
            await this.pipeline(
                RRip.HttpClient.stream(meshId[1]), // Get the file
                fs.createWriteStream(`./${RRip.outDir}/${id}.obj`) // Write it
            );
        }

        // Downloading texture
        if (textureId != null){
            await this.pipeline(
                RRip.HttpClient.stream(textureId[3]), // Get the file
                fs.createWriteStream(`./${RRip.outDir}/${id}.png`) // Write it
            );
        }
    }

    // Download hat resources
    async hatResources(id: number){
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
                RRip.HttpClient.stream(meshId[1]), // Get the file
                fs.createWriteStream(`./${RRip.outDir}/${id}.obj`) // Write it
            );
        }

        // Downloading texture
        if (textureId != null){
            await this.pipeline(
                RRip.HttpClient.stream(textureId[1]), // Get the file
                fs.createWriteStream(`./${RRip.outDir}/${id}.png`) // Write it
            );
        }
    }
}