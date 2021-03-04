# 概要
nodeでjson-serverを立ち上げる練習。

# 動作確認
1. 使用したいプロジェクト配下に移動し、下記を実行する。

```
$ cd ~/<プロジェクトパス>
$ npm install --save json-server 
```


2. faker.jsをインストール
下記を実行する。

```
npm install faker --save
```

3. generate.jsのコードを実行して、出力結果をdb.jsonに書き出す

```
node generate.js > db.json
```

4. db.jsonのデータを返すJSON Serverを起動

```
npx json-server --watch db.json
```

5. ブラウザにて、以下のパスを入力すると、db.jsonの中身が表示される。

```
http://localhost:3000/info
```

6. curlでCRUDを確認してみよう。

```
 GET：全てのデータ取得
 $ curl -X GET "http://localhost:3000/info"
 
 GET：「idが1」のデータだけ取得
 $ curl -X GET "http://localhost:3000/info/1/"
 
 POST：「idが11」「nameがhoge」「emailがfuga@gmail.com」のデータ作成
 $ curl -X POST -d "id=11&name="hoge"&email=fuga@gmail.com" "http://localhost:3000/info"
 
 PUT：idが1のデータの「nameをtest」「emailをupdate@gmail.com」に更新
 $ curl -X PUT -d "name=test&email=update@gmail.com" "http://localhost:3000/info/1"
 
 DELETE：「idが11」のデータを削除
 $ curl -X DELETE "http://localhost:3000/info/11"
```

### 参考資料
http://marak.github.io/faker.js/index.html


以下のURLのNameSpacesに 、Faker.jsの用意されているダミーデータが記載されていますので必要なものを使用してしよう！！
