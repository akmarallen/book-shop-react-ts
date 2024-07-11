import { createSlice } from "@reduxjs/toolkit";
import { getBooks } from "./reducer";
import { RootState } from "redux/store";

type State = {
  books: Book[];
  isLoading: boolean;
  error: null;
};

const initialState: State = {
  books: [],
  isLoading: false,
  error: null,
};

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getBooks.fulfilled, (state, { payload }) => {
      state.books = payload;
      state.isLoading = false;
    });

    builder.addCase(getBooks.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(getBooks.rejected, (state) => {
      state.isLoading = false;
      console.log(state, "state");
      
    });
  },
});

export default booksSlice;

export const selectBooks = (state: RootState) => state.books.books;

export interface Book {
  kind: string;
  id: string;
  etag: string;
  selfLink: string;
  volumeInfo: VolumeInfo;
  saleInfo: SaleInfo;
  accessInfo: AccessInfo;
  searchInfo: SearchInfo;
}

export interface VolumeInfo {
  title: string;
  authors: string[];
  publisher: string;
  publishedDate: string;
  description: string;
  industryIdentifiers: IndustryIdentifier[];
  readingModes: ReadingModes;
  pageCount: number;
  printType: string;
  categories: string[];
  maturityRating: string;
  allowAnonLogging: boolean;
  contentVersion: string;
  panelizationSummary: PanelizationSummary;
  imageLinks: ImageLinks;
  language: string;
  previewLink: string;
  infoLink: string;
  canonicalVolumeLink: string;
}

export interface IndustryIdentifier {
  type: string;
  identifier: string;
}

export interface ReadingModes {
  text: boolean;
  image: boolean;
}

export interface PanelizationSummary {
  containsEpubBubbles: boolean;
  containsImageBubbles: boolean;
}

export interface ImageLinks {
  smallThumbnail: string;
  thumbnail: string;
}

export interface SaleInfo {
  country: string;
  saleability: string;
  isEbook: boolean;
}

export interface AccessInfo {
  country: string;
  viewability: string;
  embeddable: boolean;
  publicDomain: boolean;
  textToSpeechPermission: string;
  epub: Epub;
  pdf: Pdf;
  webReaderLink: string;
  accessViewStatus: string;
  quoteSharingAllowed: boolean;
}

export interface Epub {
  isAvailable: boolean;
  acsTokenLink: string;
}

export interface Pdf {
  isAvailable: boolean;
  acsTokenLink: string;
}

export interface SearchInfo {
  textSnippet: string;
}
