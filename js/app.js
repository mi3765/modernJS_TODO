// import "../css/style.css";

const onClickAdd = () => {
    // text取得 初期化
    const inputText = document.querySelector("#add-text").value;
    document.querySelector("#add-text").value = "";

    createIncompleteList(inputText);
};


// 未完了リストから指定の要素を削除
const deleteFromIncompleteList = (target) => {
    document.querySelector("#incomplete-list").removeChild(target);
};

// 未完了リストに追加する関数
const createIncompleteList = (text) => {
    // 生成div classにlist-row付与
    const div = document.createElement("div");
    div.className = "list-row";

    // 生成li liに入力テキストを追加
    const li = document.createElement("li");
    li.innerText = text;

    // 生成完了ボタン
    const completeButton = document.createElement("button");
    completeButton.innerText = "完了";

    completeButton.addEventListener("click", () => {
        deleteFromIncompleteList(completeButton.parentNode);
        const addTarget = completeButton.parentNode;
        const text = addTarget.firstElementChild.innerText;
        
        // todo内容テキストの取得
        addTarget.textContent = null;
        
        // liタグの生成
        const li = document.createElement("li");
        li.innerText = text;

        // 戻すボタンの生成
        const backButton = document.createElement("button");
        backButton.innerText = "戻す";
        backButton.addEventListener("click", () => {
            // 押された戻すボタンの親タグを完了リストから削除
            const deleteTarget = backButton.parentNode;
            document.querySelector("#complete-list").removeChild(deleteTarget);

            // テキストの生成
            const text = backButton.parentNode.firstElementChild.innerText;
            createIncompleteList(text);
        });


        // divタグの子要素に各要素を設定
        addTarget.appendChild(li);
        addTarget.appendChild(backButton);
        document.querySelector("#complete-list").appendChild(addTarget);
    });

    // 生成削除ボタン
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "削除";

    // 完了 削除イベント
    completeButton.addEventListener("click", () => {
        deleteFromIncompleteList(completeButton.parentNode)
    });

    deleteButton.addEventListener("click", () => {
        deleteFromIncompleteList(deleteButton.parentNode);
        document.querySelector("#incomplete-list").removeChild(deleteTarget);
    });



    // 生成divの子要素にli,buttonを追加
    div.appendChild(li);
    div.appendChild(completeButton);
    div.appendChild(deleteButton);
    console.log(div);

    // ulタグのid取得 子要素に変数divを追加
    document.querySelector("#incomplete-list").appendChild(div);
};

// clickイベント onClickAdd()
document.querySelector("#add-button").addEventListener("click", () => onClickAdd());

