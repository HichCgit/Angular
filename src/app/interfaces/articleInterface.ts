export interface articleInterface {
    id: number,
    id_article: number,
    titre: string,
    contenu: string
    comment: CommentObject[]

}

export interface CommentObject {
    id: number,
    contenu: string,
    id_commentaire: number
}