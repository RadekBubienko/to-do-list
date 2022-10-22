{
    const tasks = [
        {
            content: "zreperować Geberita",
            done: false,
        },
        {
            content: "naprawić odpływ zmywarki",
            done: true,
        },

    ];

    const render = () => {
        let htmlString = "";

        for (const task of tasks) {
            htmlString += `
              <li>
                ${task.content}
              </li>  
            `;
        }

        document.querySelector(".js-tasks").innerHTML = htmlString;
    };

    const init = () => {
        render();

        const form = addEventListener("submit", (event) => {
          event.preventDefault();

          const newTaskContent = document.querySelector(".js-newTask").value.trim();

          if (newTaskContent === "") {
            return;
          }

          tasks.push({
            content: newTaskContent,
          });
          render();
        });

    };

    init();
}