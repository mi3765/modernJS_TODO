// import "../css/style.css";

const onClickAdd = () => {
    // text取得 初期化
    const inputText = document.querySelector("#add-text").value;
    document.querySelector("#add-text").value = "";
    
    // 生成div classにlist-row付与
    const div = document.createElement("div");
    div.className = "list-row";

    // 生成li liに入力テキストを追加
    const li = document.createElement("li");
    li.innerText = inputText;

    // 生成完了ボタン
    const completeButton = document.createElement("button");
    completeButton.innerText = "完了";

    completeButton.addEventListener("click", () => {
        deleteFromIncompleteList(completeButton.parentNode);
        const addTarget = completeButton.parentNode;
        const text = addTarget.firstElementChild.innerText;

        addTarget.textContent = null;

        const li = document.createElement("li");
        li.innerText = text;
        const backButton = document.createElement("button");
        backButton.innerText = "戻す";

        addTarget.appendChild(backButton);
        console.log(addTarget);
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

// 未完了リストから指定の要素を削除
const deleteFromIncompleteList = (target) => {
    document.querySelector("#incomplete-list").removeChild(target);
};