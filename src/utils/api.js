export default class API {
  static like_toogle(isLiked, id) {
    const method = isLiked ? "DELETE" : "PUT";
    fetch(`https://around-api.es.tripleten-services.com/v1/cards/${id}/likes`, {
      method: method,
      headers: {
        authorization: "7ac7e9c4-580f-4541-8c1d-d6fc3910f799",
      },
    });
  }
  static delete_photo(id) {
    fetch(`https://around-api.es.tripleten-services.com/v1/cards/${id}`, {
      method: "DELETE",
      headers: {
        authorization: "7ac7e9c4-580f-4541-8c1d-d6fc3910f799",
      },
    });
  }

  static load_user_info() {
    return fetch("https://around-api.es.tripleten-services.com/v1/users/me", {
      headers: {
        authorization: "7ac7e9c4-580f-4541-8c1d-d6fc3910f799",
      },
    }).then((res) => {
      return res.json();
    });
  }

  static get_cards() {
    return fetch("https://around-api.es.tripleten-services.com/v1/cards/", {
      headers: {
        authorization: "7ac7e9c4-580f-4541-8c1d-d6fc3910f799",
      },
    }).then((res) => {
      return res.json();
    });
  }

  static add_card(card) {
    return fetch("https://around-api.es.tripleten-services.com/v1/cards/", {
      method: "POST",
      headers: {
        authorization: "7ac7e9c4-580f-4541-8c1d-d6fc3910f799",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        link: card.url,
        name: card.name,
      }),
    }).then((res) => {
      return res.json();
    });
  }

  static update_info(values) {
    return fetch("https://around-api.es.tripleten-services.com/v1/users/me", {
      method: "PATCH",
      headers: {
        authorization: "7ac7e9c4-580f-4541-8c1d-d6fc3910f799",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: values[0],
        about: values[1],
      }),
    }).then((res) => {
      return res.json();
    });
  }

  static change_picture(avatar) {
    return fetch(
      "https://around-api.es.tripleten-services.com/v1/users/me/avatar",
      {
        method: "PATCH",
        headers: {
          authorization: "7ac7e9c4-580f-4541-8c1d-d6fc3910f799",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          avatar: avatar,
        }),
      }
    ).then((res) => {
      return res.json();
    });
  }
}
