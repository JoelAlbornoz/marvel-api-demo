import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'


 @Injectable({
  providedIn: 'root'
})
export class HfethService {
  private url = 'https://gateway.marvel.com:443/v1/public/characters?apikey='
  private apikey = 'aa1c6ce1a9d1f63fa2d43bd0d07ca203'
  private apihash= '2d5f5bf4c4fc089f7816840188488c11'
  private generalKey = 'https://gateway.marvel.com:443/v1/public/characters?apikey=aa1c6ce1a9d1f63fa2d43bd0d07ca203'
  private spidersReq = 'https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=Spider&apikey=aa1c6ce1a9d1f63fa2d43bd0d07ca203'
  private ironReq = 'https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=Iron&apikey=aa1c6ce1a9d1f63fa2d43bd0d07ca203'
  constructor(private http: HttpClient) {
    
   }

   getHeroesSpid(){
      return this.http.get(this.spidersReq);
   }
   getHeroes(){
    return this.http.get(this.generalKey);
  }
   public buscarHeroes(val : string){
    return this.http.get('https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=' + val + '&apikey=aa1c6ce1a9d1f63fa2d43bd0d07ca203');
  }



}
